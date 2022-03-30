import { Component, OnInit } from '@angular/core';
import {Route} from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  irRegistro(){
    this.router.navigate(['default/dashboard/register']);
  }
 
  constructor() {

   }

  ngOnInit(): void {
  }

}
