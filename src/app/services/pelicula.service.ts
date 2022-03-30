import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { Pelicula } from "../interfaces/pelicula.interface";

@Injectable({
  providedIn: 'root'
})
export class PeliculaService{
  private baseUrlBack: string = environment.baseUrlBack+'pelicula/';

  constructor(private http:HttpClient) {
  }
  getAllPeliculas():Observable<Pelicula[]>{
    const url = `${ this.baseUrlBack }all`;
      return this.http.get<Pelicula[]>(url);
  }

  getPeliculaById(id: any):Observable<Pelicula[]>{
    const url = `${ this.baseUrlBack }`+id;
      return this.http.get<Pelicula[]>(url);
  }
}
