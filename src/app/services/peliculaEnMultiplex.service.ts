import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { Multiplex } from "../interfaces/multiplex.interface";

@Injectable({
  providedIn: 'root'
})
export class PeliculaEnMultiplexService{

  private baseUrlBack: string = environment.baseUrlBack+'pelMul/';

  constructor(private http:HttpClient) {
  }

  getPeliculaEnMultiplexById(id: any):Observable<Multiplex[]>{
    const url = `${ this.baseUrlBack }`+id;
      return this.http.get<Multiplex[]>(url);
  }

}
