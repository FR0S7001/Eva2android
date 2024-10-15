import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoListPage } from './foro-list.page';

const routes: Routes = [
  {
    path: '',
    component: ForoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoListPageRoutingModule {}
