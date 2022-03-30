import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { Sala } from "../interfaces/sala.interface";

@Injectable({
  providedIn: 'root'
})
export class SalaService{

  private baseUrlBack: string = environment.baseUrlBack+'sala/';

  constructor(private http:HttpClient) {
  }

  getSalaById(id: any):Observable<Sala[]>{
    const url = `${ this.baseUrlBack }`+id;
      return this.http.get<Sala[]>(url);
  }

  getSalaByIdMultiplex(id: any):Observable<Sala[]>{
    const url = `${ this.baseUrlBack }multiplex/`+id;
      return this.http.get<Sala[]>(url);
  }

}
