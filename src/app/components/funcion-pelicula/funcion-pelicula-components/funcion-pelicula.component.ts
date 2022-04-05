import { Component, OnInit } from '@angular/core';
import { SillaTM } from 'src/app/interfaces/sillaTM.interface';
import { SillaService } from 'src/app/services/silla.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Multiplex } from 'src/app/interfaces/multiplex.interface';
import { PeliculaEnMultiplexService } from 'src/app/services/peliculaEnMultiplex.service';
import { Funcion } from 'src/app/interfaces/funcion.interface';
import { FuncionService } from 'src/app/services/funcion.service';

@Component({
  selector: 'app-funcion-pelicula',
  templateUrl: './funcion-pelicula.component.html',
  styleUrls: ['./funcion-pelicula.component.css']
})
export class FuncionPeliculaComponent implements OnInit {

  constructor(private funcionService: FuncionService, private router:Router,
    private peliculaEnMultiplex: PeliculaEnMultiplexService,
    private activatedRoute: ActivatedRoute) {
    this.getMultiplex();
   }

  ngOnInit(): void {
  }

  fechaInput: string ="";
  codigoFuncion: number = 0;
  funciones: Funcion[] = [];
  multiplexs: Multiplex[] = [];
  chair="";

  toggle(){
    if(this.fechaInput == ""){
      return true;
    }else{
      return false;
    }
  }

  sendHora(cg: any){
    this.codigoFuncion = cg;

  }

  recibirDatos(){
    if(this.codigoFuncion == 0 || this.chair == ""){
      console.log("hola")
      return true;
    }else{
      console.log("chao")
      return false;
    }
  }

  enviarDatos(multiplex: any){
    let idPelicula = this.activatedRoute.snapshot.paramMap.get('id');
    let start = (this.fechaInput);
    console.log(start);
    console.log(multiplex);
     this.funcionService.getFuncionesByPeliculaAndFecha(idPelicula, multiplex, start).subscribe(data =>{
       this.funciones=data;
      console.log(data);
     });
    // this.fecha= new Date (start);
    // console.log(this.fecha);

  }

  irSala(){
    let idPelicula = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.router.navigate(['default/dashboard/compra/'+idPelicula+'/sala'+this.codigoFuncion+'/'+this.chair]));
    this.router.navigate(['default/dashboard/compra/'+idPelicula+'/sala/'+this.codigoFuncion+'/'+this.chair]);
  }

  getMultiplex(){
    let idPelicula = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculaEnMultiplex.getPeliculaEnMultiplexById(idPelicula).subscribe(data =>{
      console.log(data);
      this.multiplexs=data;
      console.log(this.multiplexs);
      });
  }
  btnDisabled= false;

  // getSillas(cgFuncion: any, tipo: any){
  //   this.sillaService.getSillasParaUnaFuncion(cgFuncion, tipo).subscribe(data =>{
  //     console.log(data);
  //     this.sillasTM=data;
  //   });
  // }
}
