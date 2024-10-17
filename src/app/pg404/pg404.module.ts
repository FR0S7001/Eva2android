import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pg404PageRoutingModule } from './pg404-routing.module';

import { Pg404Page } from './pg404.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pg404PageRoutingModule
  ],
  declarations: [Pg404Page]
})
export class Pg404PageModule {}
