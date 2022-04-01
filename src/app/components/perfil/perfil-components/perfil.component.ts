import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';
import { CargarScriptsService } from '../../../cargar-scripts.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {



  ngOnInit(): void {
    this.getClienteById(10295281);
    this.getClienteByUser("soni14", "password105");
  }

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService , private _CargaScripts:CargarScriptsService) {
    _CargaScripts.carga(["./control/control-perfil"]);
   }

  getClienteById(id:any){
    this.clienteService.getClienteById(id).subscribe(data =>{
      this.clientes = data;
      console.log(data);
    })
  }

  getClienteByUser(username: string, password: string){
    this.clienteService.getClienteByUsuario(username, password).subscribe(data =>{
      this.clientes = data;
      console.log(data);
    })
  }
}
