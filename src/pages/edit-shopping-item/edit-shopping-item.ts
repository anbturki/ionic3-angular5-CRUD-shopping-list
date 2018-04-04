import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ShoppingItem} from '../../app/shoppingItem.interface';
import {AngularFireObject, AngularFireDatabase} from 'angularfire2/database';
@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  shoppingItem: ShoppingItem;
  ShoppingItemRef$: AngularFireObject<ShoppingItem>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingItem = navParams.get('shoppingItem');
    const shoppingId = navParams.get('shoppingItem').key
    this.ShoppingItemRef$ = database.object(`shopping-list/${shoppingId}`)
  }
  submitShoppingItem (item: ShoppingItem) {
    this.ShoppingItemRef$.update(item)
    this.navCtrl.pop()
  }
  ionViewDidLoad() {
    console.log(this.navParams.get('shoppingItem'))
  }

}
