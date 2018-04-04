import { NgModule } from '@angular/core';
import {ListItemComponent} from '../components/list-item/list-item'
import {IonicModule} from 'ionic-angular/module'
@NgModule({
  declarations: [ListItemComponent],
  imports: [IonicModule],
  exports: [ListItemComponent],
  providers: []
})

export class ComponentsModule {}