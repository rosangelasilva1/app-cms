import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasPage } from './paginas.page';

const routes: Routes = [
  {
    path: '',
    component: PaginasPage
  },
  {
    path: 'paginas/novo',
    loadChildren: () => import('./cad-alterar-paginas/cad-alterar-paginas.module').then( m => m.CadAlterarPaginasPageModule)
  },
  {
    path: 'paginas/:id/editar',
    loadChildren: () => import('./cad-alterar-paginas/cad-alterar-paginas.module').then( m => m.CadAlterarPaginasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginasPageRoutingModule {}
