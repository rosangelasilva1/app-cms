
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Administrador } from '../models/administrador';

export class AdministradorService{
  constructor (private http:HttpClient){}

  public async todos(){
    return await this.http.get<Administrador[]>(`${environment.uri}/administradores.json`).toPromise()
  }

  public async getById(administrador:Administrador){
    return await this.http.get<Administrador>(`${environment.uri}/administradores/${administrador.id}.json`).toPromise()
  }

  public async salvar(administrador:Administrador){
    if (administrador.id > 0){
      return await this.http.put<Administrador>(`${environment.uri}/administradores/${administrador.id}.json`,administrador).toPromise()
    }
    else{
      return await this.http.post<Administrador>(`${environment.uri}/administradores.json`,administrador).toPromise()
    }
  }

  public async Delete(administrador:Administrador){
    return await this.http.delete<Administrador>(`${environment.uri}/administradores/${administrador.id}.json`).toPromise()
  }

}
