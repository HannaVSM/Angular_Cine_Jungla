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

  getCliente(id: any):Observable<Cliente>{
    const url = `${ this.baseUrlBack }`+id;;
      return this.http.get<Cliente>(url);
}
}
