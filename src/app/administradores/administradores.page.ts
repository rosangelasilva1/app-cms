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
    this.carregarAdministradores(this.pagina)
    this.numeroDePaginas();
  }

  public administradores:Administrador[]
  public administrador:Administrador
  public pagina:number=1
  public nrPagTotal:number=1

  async carregarAdministradores(page:number){
     this.administradores =await new AdministradorService(this.http).todos(page);
  }

  public async alterar(adm: Administrador){
    this.router.navigateByUrl(`/administradores/administradores/${adm.id}/editar`)
  }

  public async novo(){
    this.router.navigateByUrl(`/administradores/administradores/novo`)
  }

  public async excluir(adm: Administrador){
    if(confirm("Confirma a exclusão?")){
      this.administrador = await  new AdministradorService(this.http).Delete(adm);
    }
    window.location.assign("/administradores")
  }
  primeiraPagina(){
    this.pagina=1
    this.carregarAdministradores(this.pagina)
  }

  paginaAnterior(){
    this.pagina-=1
    if (this.pagina <=0){
      this.pagina=1
    }
    this.carregarAdministradores(this.pagina)
    }

  public async proximaPagina(){

    this.pagina+=1
    var nrDePaginasTotal = await this.numeroDePaginas();

    if(  this.pagina > nrDePaginasTotal){
      this.pagina= nrDePaginasTotal
      this.carregarAdministradores(nrDePaginasTotal)
    }else{
      this.carregarAdministradores(this.pagina)
    }
  }

  public async  ultimaPagina(){
    this.pagina = await this.numeroDePaginas();
    this.carregarAdministradores(this.pagina)
  }

  public async numeroDePaginas() {
    this.nrPagTotal=1
    var qtdeRegistros= await new AdministradorService(this.http).QtdeRegistros();
    if (qtdeRegistros > 0  &&  qtdeRegistros > AdministradorService.QTDE_POR_PAGINA) {
      this.nrPagTotal = Math.trunc(qtdeRegistros / AdministradorService.QTDE_POR_PAGINA)
      if (qtdeRegistros % AdministradorService.QTDE_POR_PAGINA > 0) {
        this.nrPagTotal= Math.trunc(qtdeRegistros / AdministradorService.QTDE_POR_PAGINA) + 1
      }
    }
    return this.nrPagTotal
  }
}
