import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { CompraSnack } from "../interfaces/compraSnack.interface";

@Injectable({
  providedIn: 'root'
})
export class CompraSnackService{
  private baseUrlBack: string = environment.baseUrlBack+'compraSnack/';
  constructor(private http:HttpClient) {
   }

   //metodo por probar front y back; no hay registros
  postCompraSnack(form: CompraSnack):Observable<Response>{
    let direccion = this.baseUrlBack+"save";
    return this.http.post<Response>(direccion, form);
  }
}
