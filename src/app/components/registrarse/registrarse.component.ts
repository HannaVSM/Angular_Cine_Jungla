import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente.interface';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  registro =  new FormGroup({
    usuarioCliente: new FormControl(''),
    nombreCliente: new FormControl(''),
    cedulaCliente: new FormControl(''),
    passwordCliente: new FormControl('')
  });

  registrar(form:Cliente){
    form.puntos = 0;
    this.clienteService.postCliente(form).subscribe(data =>{
      console.log(data);
      this.router.navigate(['default/dashboard/cartelera']);
    });
  }
}
