import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoListPageRoutingModule } from './foro-list-routing.module';

import { ForoListPage } from './foro-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForoListPageRoutingModule
  ],
  declarations: [ForoListPage]
})
export class ForoListPageModule {}
