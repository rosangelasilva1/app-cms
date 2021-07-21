
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginasPageRoutingModule } from './paginas-routing.module';

import { PaginasPage } from './paginas.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [PaginasPage]
})
export class PaginasPageModule {}
