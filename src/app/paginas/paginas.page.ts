import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pagina } from '../models/pagina';
import { PaginaService } from '../services/paginaService';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.page.html',
  styleUrls: ['./paginas.page.scss'],
})
export class PaginasPage {

  constructor(private http:HttpClient ) {
    this.carregarPaginas()
   }

  public paginas:Pagina[]

  async carregarPaginas(){
    this.paginas = await new PaginaService(this.http).todos();
  }
}