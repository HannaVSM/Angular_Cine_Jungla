import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SillaTM } from 'src/app/interfaces/sillaTM.interface';
import { SillaService } from 'src/app/services/silla.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

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
