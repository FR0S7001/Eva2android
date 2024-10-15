import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoEditPageRoutingModule } from './foro-edit-routing.module';

import { ForoEditPage } from './foro-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForoEditPageRoutingModule
  ],
  declarations: [ForoEditPage]
})
export class ForoEditPageModule {}
