import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoEditPage } from './foro-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ForoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoEditPageRoutingModule {}
