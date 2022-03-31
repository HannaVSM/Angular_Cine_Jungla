import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
