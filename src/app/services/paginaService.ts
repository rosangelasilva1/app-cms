import{ Pagina } from '../models/pagina'
import{HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export class PaginaService{

  constructor(private http: HttpClient){}

  public async todos(){
    return await this.http.get<Pagina[]>(`${environment.uri}/paginas.json`).toPromise()
  }

}
