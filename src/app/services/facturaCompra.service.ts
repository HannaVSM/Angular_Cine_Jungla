import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { FacturaCompra } from "../interfaces/facturaCompra.interface";
import { SillaTM } from "../interfaces/sillaTM.interface";
import { SnackTM } from "../interfaces/snackTM.interface";

@Injectable({
  providedIn: 'root'
})
//por probar
export class FacturaCompraService{
  private baseUrlBack: string = environment.baseUrlBack+'factura/';
  constructor(private http:HttpClient) {
   }

  getByCedula(cedula: any){
    const url = `${ this.baseUrlBack }`+cedula;
      return this.http.get<FacturaCompra[]>(url);
  }

  postSilla(form: SillaTM):Observable<Response>{
    let direccion = this.baseUrlBack+"seleccionarSillas";
    return this.http.post<Response>(direccion, form);
  }

  postSnack(form: SnackTM):Observable<Response>{
    let direccion = this.baseUrlBack+"seleccionarSnacks";
    return this.http.post<Response>(direccion, form);
  }

  getRedimirPuntos(puntosRedimidos: boolean){
    let direccion = this.baseUrlBack+"pagoFactura/"+puntosRedimidos;
    return this.http.get<string>(direccion);
  }


}
