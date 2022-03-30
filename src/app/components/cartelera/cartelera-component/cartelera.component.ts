import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/interfaces/pelicula.interface';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {

  constructor(private peliculaService:PeliculaService,
    private router:Router) {
      this.getPeliculas()
    }

  ngOnInit(): void {
  }

  peliculas: Pelicula[] = [];

  getPeliculas(){
    this.peliculaService.getAllPeliculas().subscribe(data =>{
      console.log(data);
      this.peliculas=data;
    });
  }
}

