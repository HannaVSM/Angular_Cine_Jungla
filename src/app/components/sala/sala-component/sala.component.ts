import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturaCompraTM } from 'src/app/interfaces/facturaCompraTM.interface';
import { SillaTM } from 'src/app/interfaces/sillaTM.interface';
import { SnackTM } from 'src/app/interfaces/snackTM.interface';
import { FacturaCompraService } from 'src/app/services/facturaCompra.service';
import { SillaService } from 'src/app/services/silla.service';
import { VentaSnackService } from 'src/app/services/ventaSnack.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private sillaService: SillaService, private activatedRoute: ActivatedRoute,
    private facturaCompraService: FacturaCompraService, private ventaSnackService: VentaSnackService) {
    this.getSillas();
    this.getSnacks();
   }

  ngOnInit(): void {
  }

  sillasTM: SillaTM[] = [];
  sillasTMenvio: SillaTM[] = [];
  snacksTM: SnackTM[] = [];
  snacksTMenvio: SnackTM[] = [];
  factura!: FacturaCompraTM;

  getSillas(){
    let cgFuncion = this.activatedRoute.snapshot.paramMap.get('funcion');
    let tipo = this.activatedRoute.snapshot.paramMap.get('tipoSilla');
    this.sillaService.getSillasParaUnaFuncion(cgFuncion, tipo).subscribe(data =>{
      console.log(data);
      this.sillasTM=data;
    });
  }
  getSnacks(){
    let cgMultiplex = this.activatedRoute.snapshot.paramMap.get('multiplex');
    this.ventaSnackService.getVentaSnacksInMultiplex(cgMultiplex).subscribe(data =>{
      this.snacksTM = data;
    });
  }
  escogerSilla(silla: SillaTM){
   this.sillasTMenvio.push(silla);
   console.log(this.sillasTMenvio);
  }

  enviarFactura(){
    this.facturaCompraService.postSilla(this.sillasTMenvio).subscribe(data =>{
      console.log(data);
    });
    this.facturaCompraService.postSnack(this.snacksTMenvio).subscribe(data =>{
      console.log(data);
    });


    // this.
  }
  putaFactura(){
    this.facturaCompraService.getFactura().subscribe(data =>{
      this.factura = data;
      console.log(data);
      console.log(this.factura);
    });
  }

  escogerSnack(snk: SnackTM){
    this.snacksTMenvio.push(snk);
  }

}
