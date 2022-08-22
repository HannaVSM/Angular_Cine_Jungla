import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente.interface';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{
  constructor(private router: Router, private clienteService: ClienteService) {
   }

   ngOnInit(): void {
  }

  sesion =  new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  cliente!: Cliente;

  goToRegister(){
    this.router.navigate(['register']);
  }

  check(){
    this.clienteService.getClienteByUsuario(this.sesion.value.username, this.sesion.value.password).subscribe(data =>{
    console.log(data);
    if(data == null){
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['default/dashboard/cartelera']);
    }
    });
  }
}
