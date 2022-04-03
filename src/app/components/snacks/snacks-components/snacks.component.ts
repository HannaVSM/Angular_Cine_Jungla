import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Snack } from 'src/app/interfaces/snack.interface';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {
  constructor(private snackService:SnackService,
    private router:Router) {
      this.getSnacks();
    }

  ngOnInit(): void {
  }

  irFuncionPelicula(id: number){
    this.router.navigate(['default/dashboard/compra/1/sala']);
  }

  snacks: Snack[] = [];

  getSnacks(){
    this.snackService.getAllSnacks().subscribe(data =>{
      console.log(data);
      this.snacks=data;
    });
  }
}
