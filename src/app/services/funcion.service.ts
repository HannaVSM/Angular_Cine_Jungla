import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { Funcion } from "../interfaces/funcion.interface";

@Injectable({
  providedIn: 'root'
})
//por probar
export class FuncionService{
  private baseUrlBack: string = environment.baseUrlBack+'funcion/';
  constructor(private http:HttpClient) {
   }

   getFuncionesByPeliculaAndFecha(cgMultiplex: number, cgPelicula: number, fecha: string):Observable<Funcion[]>{
    const url = `${ this.baseUrlBack }`+cgMultiplex+"/"+cgPelicula+"/"+fecha;
      return this.http.get< Funcion[]>(url);
  }
}
