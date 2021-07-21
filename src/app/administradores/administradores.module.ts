
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdministradoresPageRoutingModule } from './administradores-routing.module';
import { AdministradoresPage } from './administradores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministradoresPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AdministradoresPage]
})
export class AdministradoresPageModule {}
