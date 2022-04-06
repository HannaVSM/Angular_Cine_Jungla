import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { FacturaCompra } from "../interfaces/facturaCompra.interface";
import { SillaTM } from "../interfaces/sillaTM.interface";
import { SnackTM } from "../interfaces/snackTM.interface";
import { FacturaCompraTM } from "../interfaces/facturaCompraTM.interface";

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

  postSilla(form: SillaTM[]):Observable<SillaTM[]>{
    let direccion = this.baseUrlBack+"seleccionarSillas";
    return this.http.post<SillaTM[]>(direccion, form);
  }

  postSnack(form: SnackTM[]):Observable<SillaTM[]>{
    let direccion = this.baseUrlBack+"seleccionarSnacks";
    return this.http.post<SillaTM[]>(direccion, form);
  }

  getFactura(){
    let direccion = this.baseUrlBack+"generarFactura";
    return this.http.get<FacturaCompraTM>(direccion);
    }

  getRedimirPuntos(){
    let direccion = this.baseUrlBack+"posibilidadRedimirPuntos";
    return this.http.get<boolean>(direccion);
  }


}
