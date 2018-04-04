import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopingListPage } from './shoping-list';
import {ComponentsModule} from '../../components/components.module'
@NgModule({
  declarations: [
    ShopingListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopingListPage),
    ComponentsModule
  ],
})
export class ShopingListPageModule {}
