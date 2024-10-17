import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pg404Page } from './pg404.page';

const routes: Routes = [
  {
    path: '',
    component: Pg404Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pg404PageRoutingModule {}
