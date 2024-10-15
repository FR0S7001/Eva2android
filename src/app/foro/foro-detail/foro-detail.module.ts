import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoDetailPageRoutingModule } from './foro-detail-routing.module';

import { ForoDetailPage } from './foro-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForoDetailPageRoutingModule
  ],
  declarations: [ForoDetailPage]
})
export class ForoDetailPageModule {}
