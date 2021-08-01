import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pagina } from '../models/pagina';
import { PaginaService } from '../services/paginaService';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.page.html',
  styleUrls: ['./paginas.page.scss'],
})
export class PaginasPage {

  constructor(
    private http:HttpClient,
    private router: Router ) {

    this.carregarPaginas(this.pagina)
    this.numeroDePaginas();

   }

  public paginaSite:Pagina
  public paginas:Pagina[]
  public pagina:number=1
  public nrPagTotal:number=1

  async carregarPaginas(page:number){
    this.paginas = await new PaginaService(this.http).todos(page);
  }
  public async alterar(pag: Pagina){
    this.router.navigateByUrl(`/paginas/paginas/${pag.id}/editar`)
  }

  public async novo(){
    this.router.navigateByUrl(`/paginas/paginas/novo`)
  }

  public async excluir(adm: Pagina){
    if(confirm("Confirma a exclusão?")){
      this.paginaSite = await  new PaginaService(this.http).Delete(adm);
    }
    window.location.assign("/paginas")
  }
  primeiraPagina(){
    this.pagina=1
    this.carregarPaginas(this.pagina)
  }

  paginaAnterior(){
    this.pagina-=1
    if (this.pagina <=0){
      this.pagina=1
    }
    this.carregarPaginas(this.pagina)
    }

  public async proximaPagina(){
    this.pagina+=1
    var nrDePaginasTotal = await this.numeroDePaginas();
    if(  this.pagina > nrDePaginasTotal){
      this.pagina= nrDePaginasTotal
      this.carregarPaginas(nrDePaginasTotal)
    }else{
      this.carregarPaginas(this.pagina)
    }
  }

  public async  ultimaPagina(){
    this.pagina = await this.numeroDePaginas();
    this.carregarPaginas(this.pagina)
  }

  public async numeroDePaginas() {
    this.nrPagTotal=1
    var qtdeRegistros= await new PaginaService(this.http).QtdeRegistros();
    if (qtdeRegistros > 0  &&  qtdeRegistros > PaginaService.QTDE_POR_PAGINA) {
      this.nrPagTotal = Math.trunc(qtdeRegistros / PaginaService.QTDE_POR_PAGINA)
      if (qtdeRegistros % PaginaService.QTDE_POR_PAGINA > 0) {
        this.nrPagTotal= Math.trunc(qtdeRegistros / PaginaService.QTDE_POR_PAGINA) + 1
      }
    }
    return this.nrPagTotal
  }
}
