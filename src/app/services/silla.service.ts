import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { Silla } from "../interfaces/silla.interface";
import { SillaTM } from "../interfaces/sillaTM.interface";

@Injectable({
  providedIn: 'root'
})
export class SillaService{

  private baseUrlBack: string = environment.baseUrlBack+'silla/';

  constructor(private http:HttpClient) {
  }

  getSillaByPrice(price: any):Observable<Silla[]>{
    const url = `${ this.baseUrlBack }precio/precio`+price;
      return this.http.get<Silla[]>(url);
  }

  getSillasByCodigoSala(id: any):Observable<Silla[]>{
    const url = `${ this.baseUrlBack }`+id;
      return this.http.get<Silla[]>(url);
  }

  getSillasByCodigoSalaAndTipo(id: any, tipo: any):Observable<Silla[]>{
    const url = `${ this.baseUrlBack }`+id+"/"+tipo;
      return this.http.get<Silla[]>(url);
  }

  getSillasParaUnaFuncion(cgFuncion: any, tipo: any):Observable<SillaTM[]>{
    const url = `${ this.baseUrlBack }sillasFuncion/`+cgFuncion+"/"+tipo;
      return this.http.get<SillaTM[]>(url);
  }

}
