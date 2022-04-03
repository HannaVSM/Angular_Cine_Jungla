import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(private route: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  registro =  new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  registrar(){

  }
}
