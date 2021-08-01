import { HttpClient } from '@angular/common/http';
import { PaginaService } from './../../services/paginaService';
import { Component, OnInit } from '@angular/core';
import { Pagina } from 'src/app/models/pagina';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cad-alterar-paginas',
  templateUrl: './cad-alterar-paginas.page.html',
  styleUrls: ['./cad-alterar-paginas.page.scss'],
})
export class CadAlterarPaginasPage implements OnInit {

  public pagina:Pagina;
  public pagEmpty:Pagina = {id:0, nome:null, conteudo:null, areaRestrita:false, login:false, home:false, ordem:0 }
  public id:number=0

  constructor(private http:HttpClient,
              private routerParam:ActivatedRoute) { }

  ngOnInit() {

    this.pagina = this.pagEmpty;
    this.id = this.routerParam.snapshot.params.id;
    this.getPaginaId();
  }

  public async getPaginaId(){
    this.pagina = this.pagEmpty;
    if ( this.id > 0){
      this.pagina.id =this.routerParam.snapshot.params.id;
      this.pagina = await new PaginaService(this.http).getById(this.pagina)
    }
  }

  public async salvar(){
    await new PaginaService(this.http).salvar(this.pagina);
    window.location.assign("/paginas")
  }
}
