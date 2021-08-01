import{ Pagina } from '../models/pagina'
import{HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export class PaginaService{

  constructor(private http: HttpClient){}

  public static QTDE_POR_PAGINA=3

  public async todos(page:number){
    return await this.http.get<Pagina[]>(`${environment.uri}/paginas.json?page=${page}`).toPromise()
  }

  public async getById(pagina:Pagina){
    return await this.http.get<Pagina>(`${environment.uri}/paginas/${pagina.id}.json`).toPromise()
  }

  public async salvar(pagina:Pagina){
    if (pagina.id > 0){
      return await this.http.put<Pagina>(`${environment.uri}/paginas/${pagina.id}.json`,pagina).toPromise()
    }
    else{
      return await this.http.post<Pagina>(`${environment.uri}/paginas.json`,pagina).toPromise()
    }
  }

  public async Delete(pagina:Pagina){
    return await this.http.delete<Pagina>(`${environment.uri}/paginas/${pagina.id}.json`).toPromise()
  }

  public async QtdeRegistros(){
    var paginas = this.http.get<number>(`${environment.uri}/paginas/qtde_registros.json`).toPromise()
    return paginas
  }

}
