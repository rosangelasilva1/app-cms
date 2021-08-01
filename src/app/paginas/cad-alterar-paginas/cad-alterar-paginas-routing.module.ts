import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadAlterarPaginasPage } from './cad-alterar-paginas.page';

const routes: Routes = [
  {
    path: '',
    component: CadAlterarPaginasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadAlterarPaginasPageRoutingModule {}
