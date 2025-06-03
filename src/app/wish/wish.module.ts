import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListComponent } from 'src/app/wish/wish-list/wish-list.component';
import { AddWishFormComponent } from 'src/app/wish/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from 'src/app/wish/wish-filter/wish-filter.component';
import { WishListItemComponent } from 'src/app/wish/wish-list-item/wish-list-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishComponent } from './wish.component';


@NgModule({
  declarations: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }
