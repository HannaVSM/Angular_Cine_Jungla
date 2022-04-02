import { Component, OnInit } from '@angular/core';
import { SillaTM } from 'src/app/interfaces/sillaTM.interface';
import { SillaService } from 'src/app/services/silla.service';

@Component({
  selector: 'app-funcion-pelicula',
  templateUrl: './funcion-pelicula.component.html',
  styleUrls: ['./funcion-pelicula.component.css']
})
export class FuncionPeliculaComponent implements OnInit {

  constructor(private sillaService: SillaService) {
    this.getSillas(458, "general");
   }

  ngOnInit(): void {
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
