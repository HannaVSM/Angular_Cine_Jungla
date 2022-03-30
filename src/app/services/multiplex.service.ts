import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { Multiplex } from "../interfaces/multiplex.interface";

@Injectable({
  providedIn: 'root'
})
export class MultiplexService{

  private baseUrlBack: string = environment.baseUrlBack+'multiplex/';

  constructor(private http:HttpClient) {
  }

  getAllMultiplexs(id: any):Observable<Multiplex[]>{
    const url = `${ this.baseUrlBack }all`;
      return this.http.get<Multiplex[]>(url);
  }

  getMultiplexById(id: any):Observable<Multiplex[]>{
    const url = `${ this.baseUrlBack }`+id;
      return this.http.get<Multiplex[]>(url);
  }


}
