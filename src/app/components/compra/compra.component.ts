import { Component, OnInit } from '@angular/core';
import { Funcion } from 'src/app/interfaces/funcion.interface';
import { FuncionService } from 'src/app/services/funcion.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private funcionService: FuncionService) { }

  funcion: Funcion [] =[];
  ngOnInit(): void {
    this.getFunciones(2,3,"2022-04-11");
  }
  getFunciones(cgMultiplex: number, cgPelicula: number, fecha: string){
    this.funcionService.getFuncionesByPeliculaAndFecha(cgMultiplex, cgPelicula,fecha).subscribe(data =>{
      this.funcion = data;
      console.log(data);
    })
  }
}
