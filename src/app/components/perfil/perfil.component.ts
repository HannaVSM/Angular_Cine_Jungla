import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {



  ngOnInit(): void {
    this.getCliente(10295281);
  }

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  getCliente(id:any){
    this.clienteService.getCliente(id).subscribe(data =>{
      console.log(data);
    })
  }
}
