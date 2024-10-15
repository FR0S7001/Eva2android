import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoAddPageRoutingModule } from './foro-add-routing.module';

import { ForoAddPage } from './foro-add.page';
import { ReactiveFormsModule } from '@angular/forms';  // <<========


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForoAddPageRoutingModule,
    ReactiveFormsModule, 
  ],
  declarations: [ForoAddPage]
})
export class ForoAddPageModule {}
