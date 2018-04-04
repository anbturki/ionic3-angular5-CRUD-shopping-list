import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ShoppingItem} from '../../app/shoppingItem.interface'
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  shoppingItem = {} as ShoppingItem
  shoppingItemRef$: AngularFireList<ShoppingItem>
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingItemRef$ = this.database.list('shopping-list')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingPage');
  }
  submitShoppingItem (item) {
    this.shoppingItemRef$.push(item)
    this.navCtrl.pop()
  }

}
