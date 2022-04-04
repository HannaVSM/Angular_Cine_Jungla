import { Component, OnInit } from '@angular/core';
import { SillaTM } from 'src/app/interfaces/sillaTM.interface';
import { SillaService } from 'src/app/services/silla.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcion-pelicula',
  templateUrl: './funcion-pelicula.component.html',
  styleUrls: ['./funcion-pelicula.component.css']
})
export class FuncionPeliculaComponent implements OnInit {

  constructor(private sillaService: SillaService , private router:Router) {
    this.getSillas(458, "general");
   }

   irSala(){
    this.router.navigate(['default/dashboard/compra/1/sala']);

   }

  ngOnInit(): void {
  }

  toggle(){
    
  }

  sillasTM: SillaTM[] = [];

  btnDisabled= false;

  getSillas(cgFuncion: any, tipo: any){
    this.sillaService.getSillasParaUnaFuncion(cgFuncion, tipo).subscribe(data =>{
      console.log(data);
      this.sillasTM=data;
    });
  }
}
