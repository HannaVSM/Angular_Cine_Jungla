import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { faFilm } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faFacebook=faFilm;

  constructor(private peliculaService:PeliculaService ,private router:Router) {
  
    
   }

  irCartelera(){
    this.router.navigate(['default/dashboard/cartelera']);
  }
  irSnacks(){
    this.router.navigate(['default/dashboard/snacks']);
  }
  irPerfil(){
    this.router.navigate(['default/dashboard/perfil']);

  }

  ngOnInit(): void {
  }

}
