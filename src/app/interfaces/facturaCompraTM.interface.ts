import { ListKeyManager } from "@angular/cdk/a11y";
import { Time } from "@angular/common";
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons"
import { SnackTM } from "./snackTM.interface";

export interface FacturaCompraTM{
    cedulaCliente:number;
    nombreCliente:string;
    fechaFactura:Date;
    multiplex:string;
    pelicula:string;
    fechaFuncion:Date;
    horaFuncion:Time;
    tipoFuncion:string;
    doblada:boolean;
    nombreSala:string;
    sillas:[];
    precioTotalSillas:number;
    snacksComprados:SnackTM[];
    precioTotalSnacks:number;
    puntosRedimidos:boolean;
    totalPago:number;







}
