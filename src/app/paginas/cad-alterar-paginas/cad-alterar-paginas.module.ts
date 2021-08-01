import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadAlterarPaginasPageRoutingModule } from './cad-alterar-paginas-routing.module';

import { CadAlterarPaginasPage } from './cad-alterar-paginas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadAlterarPaginasPageRoutingModule
  ],
  declarations: [CadAlterarPaginasPage]
})
export class CadAlterarPaginasPageModule {}
