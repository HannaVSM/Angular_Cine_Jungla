import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { Snack } from "../interfaces/snack.interface";

@Injectable({
  providedIn: 'root'
})
export class SnackService{

  private baseUrlBack: string = environment.baseUrlBack+'snack/';

  constructor(private http:HttpClient) {
  }

  getAllSnacks():Observable<Snack[]>{
    const url = `${ this.baseUrlBack }all`;
      return this.http.get<Snack[]>(url);
  }

  getSnackById(id: any):Observable<Snack[]>{
    const url = `${ this.baseUrlBack }`+id;
      return this.http.get<Snack[]>(url);
  }

}
