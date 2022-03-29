import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { Cliente } from "../interfaces/cliente.interface";

@Injectable({
  providedIn: 'root'
})
export class ClienteService{
  private baseUrlBack: string = environment.baseUrlBack+'cliente/';
  constructor(private http:HttpClient) {
   }

  getClienteById(id: any):Observable<Cliente[]>{
    const url = `${ this.baseUrlBack }`+id;
      return this.http.get<Cliente[]>(url);
  }
  getClienteByUsuario(username: string, password: string):Observable<Cliente[]>{
  const url = `${ this.baseUrlBack }sesion/`+username+"/"+password;
    return this.http.get<Cliente[]>(url);
  }
}
