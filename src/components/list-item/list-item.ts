import { Component, Input } from '@angular/core';
import {ShoppingItem} from '../../app/shoppingItem.interface'
/**
 * Generated class for the ListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-item',
  templateUrl: 'list-item.html'
})
export class ListItemComponent {

  @Input() item: ShoppingItem

  constructor() {
    console.log('Hello ListItemComponent Component');
  }

}
