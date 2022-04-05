import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcion } from 'src/app/interfaces/funcion.interface';
import { Pelicula } from 'src/app/interfaces/pelicula.interface';
import { FuncionService } from 'src/app/services/funcion.service';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private funcionService: FuncionService, private peliculaService: PeliculaService,
    private activatedRoute: ActivatedRoute) { }

  funcion: Funcion [] =[];
  pelicula!: Pelicula;
  ngOnInit(): void {
    // this.getFunciones(2,3,"2022-04-11");
    this.getPelicula();

  }
  getPelicula(){
    let idPelicula = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculaService.getPeliculaById(idPelicula).subscribe(data =>{
      this.pelicula=data;
      console.log(this.pelicula);
    });
  }
  // getFunciones(cgMultiplex: number, cgPelicula: number, fecha: string){
  //   this.funcionService.getFuncionesByPeliculaAndFecha(cgMultiplex, cgPelicula,fecha).subscribe(data =>{
  //     this.funcion = data;
  //     console.log(data);
  //   });
  // }
}
