import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  comprador: string = '';
  comprado: string = '';
  pagoTarjeta: string = '';
  boletosCantidad: string = '';

  // Varibles para operaciones
  boletosPermitidos: number = 0;
  cliente: string = '';
  precioTotal: number = 0;
  costoUnidad: number = 0;
  boletosP: number = 0;
  Namecomprador: string = '';
  porcentaje15: number = 0;
  porcentaje10: number = 0;

  imagenUrl: 'a'

  constructor() { }

  procesar(): void {
    /* parseInt sirve convertir el valor de string a entero  */
    this.costoUnidad = parseInt(this.boletosCantidad) * 12;
    this.boletosP = parseInt(this.comprado) * 7;
    this.boletosPermitidos = parseInt(this.boletosCantidad);

    /* 550 = 100%
        ?  = 15%
    */

    // porcentaje de 10/
    this.porcentaje10 = (this.costoUnidad * 10) / 100;
    this.porcentaje15 = (this.costoUnidad * 15) / 100;

    

    if (this.boletosPermitidos <= this.boletosP) {
      if (
        this.boletosCantidad == '3' ||
        this.boletosCantidad == '4' ||
        this.boletosCantidad == '5'
      ) {
        this.Namecomprador = this.comprador;
        this.precioTotal = this.costoUnidad - this.porcentaje10;
      } else if (this.boletosCantidad == '1' || this.boletosCantidad == '2') {
        this.Namecomprador = this.comprador;
        this.precioTotal = this.costoUnidad;
      } else {
        this.Namecomprador = this.comprador;
        this.precioTotal = this.costoUnidad - this.porcentaje15;
      }
      if (this.pagoTarjeta == 'si') {
        this.precioTotal = this.precioTotal - (this.precioTotal * .10);
      } 
      if (this.pagoTarjeta == 'no') {
        this.precioTotal
      } 
    }
  }

  ngOnInit(): void {
  }

}
