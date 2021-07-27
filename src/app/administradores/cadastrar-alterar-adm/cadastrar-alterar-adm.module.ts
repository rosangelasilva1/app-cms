import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarAlterarAdmPageRoutingModule } from './cadastrar-alterar-adm-routing.module';

import { CadastrarAlterarAdmPage } from './cadastrar-alterar-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarAlterarAdmPageRoutingModule
  ],
  declarations: [CadastrarAlterarAdmPage]
})
export class CadastrarAlterarAdmPageModule {}
