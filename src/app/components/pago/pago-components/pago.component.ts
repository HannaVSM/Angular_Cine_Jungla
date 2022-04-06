import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FacturaCompraTM } from 'src/app/interfaces/facturaCompraTM.interface';
import { FacturaCompraService } from 'src/app/services/facturaCompra.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor(private facturaCompraService: FacturaCompraService) {
    this.getFactura();
  }

  fact!: FacturaCompraTM;
  booleano= true;
  ngOnInit(): void {
  }
  factura =  new FormGroup({
    multiplex: new FormControl(''),
    pelicula: new FormControl(''),
    fechaFuncion: new FormControl(''),
    horaFuncion: new FormControl(''),
    nombreSala: new FormControl(''),
    sillas: new FormControl(''),
    totalPago: new FormControl('')
  });
  getFactura(){
    this.facturaCompraService.getFactura().subscribe(data =>{
      this.fact = data;
      let hora = this.fact.horaFuncion.toString().substring(11,16);
      console.log(data);
      console.log(this.fact);
      this.factura.setValue({
        'multiplex': this.fact.multiplex,
        'pelicula': this.fact.pelicula,
        'fechaFuncion': this.fact.fechaFuncion,
        'horaFuncion': hora,
        'nombreSala': this.fact.nombreSala,
        'sillas': this.fact.sillas,
        'totalPago': this.fact.totalPago
      })
    });
  }

  sePuede(){
    this.facturaCompraService.getRedimirPuntos().subscribe(data =>{
      this.booleano = data;
    });
    return this.booleano;
  }

  pagar(){
    
  }
}
