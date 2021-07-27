import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministradoresPage } from './administradores.page';

const routes: Routes = [
  {
    path: '',
    component: AdministradoresPage
  },
  {
    path: 'administradores/novo',
    loadChildren: () => import('./cadastrar-alterar-adm/cadastrar-alterar-adm.module').then( m => m.CadastrarAlterarAdmPageModule)
  },
  {
    path: 'administradores/:id/editar',
    loadChildren: () => import('./cadastrar-alterar-adm/cadastrar-alterar-adm.module').then( m => m.CadastrarAlterarAdmPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradoresPageRoutingModule {}
