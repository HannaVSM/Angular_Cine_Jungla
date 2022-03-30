import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { VentaSnack } from "../interfaces/ventaSnack.interface";
import { SnackTM } from "../interfaces/snackTM.interface";

@Injectable({
  providedIn: 'root'
})
export class VentaSnackService{

  private baseUrlBack: string = environment.baseUrlBack+'ventaSnack/';

  constructor(private http:HttpClient) {
  }

  getAllByCodigoMultiplex(cgMultiplex: any):Observable<VentaSnack[]>{
    const url = `${ this.baseUrlBack }`+cgMultiplex;
      return this.http.get<VentaSnack[]>(url);
  }

  disponibilidadSnack(stock: any):Observable<VentaSnack[]>{
    const url = `${ this.baseUrlBack }stock/`+stock;
      return this.http.get<VentaSnack[]>(url);
  }

  getVentaSnacksInMultiplex(cgMultiplex: any):Observable<SnackTM[]>{
    const url = `${ this.baseUrlBack }ventaSnacks/`+cgMultiplex;
      return this.http.get<SnackTM[]>(url);
  }
}
