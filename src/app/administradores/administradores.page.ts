import { Router } from '@angular/router';
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

  constructor(private http:HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.carregarAdministradores()
  }

  public administradores:Administrador[]

  async carregarAdministradores(){
    this.administradores = await new AdministradorService(this.http).todos();
  }

  public async alterar(adm: Administrador){
    this.router.navigateByUrl(`/administradores/administradores/${adm.id}/editar`)
  }

  public async novo(){
    this.router.navigateByUrl(`/administradores/administradores/novo`)
  }

}
