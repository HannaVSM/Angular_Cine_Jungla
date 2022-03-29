import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { DetalleDispoSilla } from "../interfaces/detalleDispoSilla.interface";

@Injectable({
  providedIn: 'root'
})
 //Por probar
export class DetalleDispoSillaService{

  private baseUrlBack: string = environment.baseUrlBack+'DispoSilla/';
  constructor(private http:HttpClient) {
   }


  getDisponibilidad():Observable<DetalleDispoSilla[]>{
    const url = `${ this.baseUrlBack }/sillaDispoXd`;
      return this.http.get<DetalleDispoSilla[]>(url);
  }

  getClienteById(cod: any):Observable<DetalleDispoSilla[]>{
    const url = `${ this.baseUrlBack }`+cod;
      return this.http.get<DetalleDispoSilla[]>(url);
  }
}
