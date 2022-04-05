import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SillaTM } from 'src/app/interfaces/sillaTM.interface';
import { SillaService } from 'src/app/services/silla.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private sillaService: SillaService, private activatedRoute: ActivatedRoute) {
    this.getSillas();
   }

  ngOnInit(): void {
  }

  sillasTM: SillaTM[] = [];

  btnDisabled= false;

  getSillas(){
    let cgFuncion = this.activatedRoute.snapshot.paramMap.get('funcion');
    let tipo = this.activatedRoute.snapshot.paramMap.get('tipoSilla');
    this.sillaService.getSillasParaUnaFuncion(cgFuncion, tipo).subscribe(data =>{
      console.log(data);
      this.sillasTM=data;
    });
  }

  escogerSilla(){

  }
}
