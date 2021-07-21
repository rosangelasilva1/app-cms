import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../services/administradorService';
import { Administrador } from '../models/administrador';



@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.page.html',
  styleUrls: ['./administradores.page.scss'],

})
export class AdministradoresPage implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.carregarAdministradores()
  }

  public administradores:Administrador[]

  async carregarAdministradores(){
    this.administradores = await new AdministradorService(this.http).todos();
  }
}
