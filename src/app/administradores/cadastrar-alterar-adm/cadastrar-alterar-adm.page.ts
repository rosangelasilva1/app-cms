import { Administrador } from './../../models/administrador';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PaginaService } from 'src/app/services/paginaService';
import { HttpClient } from '@angular/common/http';
import { AdministradorService } from 'src/app/services/administradorService';

@Component({
  selector: 'app-cadastrar-alterar-adm',
  templateUrl: './cadastrar-alterar-adm.page.html',
  styleUrls: ['./cadastrar-alterar-adm.page.scss'],
})
export class CadastrarAlterarAdmPage implements OnInit {

  constructor(private router: Router,
              private routerParams:ActivatedRoute,
              private http:HttpClient ) { }

  ngOnInit() {
    this.id= this.routerParams.snapshot.params.id
    this.administrador = this.admEmpty;
    this.getAdministradorId()
  }

  public id:number=0
  admEmpty: Administrador = {id: 0, nome: null, telefone: null, email: null, senha:null};
  administrador:Administrador

  async getAdministradorId(){
    if(this.id > 0){
      this.administrador.id = this.id;
      this.administrador = await new AdministradorService(this.http).getById(this.administrador);
    }else{
      this.administrador = this.admEmpty;
   }
  }

  async salvar(){
    await new AdministradorService(this.http).salvar(this.administrador);
    window.location.assign("/administradores")

  }

}
