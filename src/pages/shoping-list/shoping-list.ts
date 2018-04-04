import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { ShoppingItem } from '../../app/shoppingItem.interface'
@IonicPage()
@Component({
  selector: 'page-shoping-list',
  templateUrl: 'shoping-list.html',
})
export class ShopingListPage {
  ShoppingListRef$: AngularFireList<ShoppingItem>;
  ShoppingItems
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
    // database.list('shopping-list').valueChanges().subscribe(x => console.log(x))
    this.ShoppingListRef$ = this.database.list('shopping-list');
    this.ShoppingItems = this.database.list('shopping-list').snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
    })
  }

  ionViewDidLoad() {

  }

  selecteShoppingItem(shoppingItem: ShoppingItem) {
    // Edit shopping item
    // Remove shoppinh item
    // Cancel the list sheet
    console.log(shoppingItem)
    this.actionSheetCtrl.create({
      title: `${shoppingItem.itemName}`,
      buttons: [
        {
          text: 'Edit', handler: () => {
            this.navCtrl.push('EditShoppingItemPage', {shoppingItem});
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.ShoppingListRef$.remove(shoppingItem.key)
          }
        },
        {
          text: 'Cancel',
          handler: () => {

          }
        }
      ]
    }).present()
  }
  navigateToAddShoppingPage() {
    this.navCtrl.push('AddShoppingPage')
  }

}
