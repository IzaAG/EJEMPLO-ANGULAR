import { Component, OnInit } from '@angular/core';
import { setupTestingRouterInternal } from '@angular/router/testing';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  

  //la varibles es num y su valor es number//
  num:number;

  //se declara "total" donde se va a guardar el arreglo (datos de resultado)//
  total:string[]=[];


  constructor() { }

  //tabla función//

  tabla():void{
    //Se declara de nuevo el arreglo para almacenar el resultado final
    let total :string[]=[];
    //Se declara la i para saber desde donde empezara y hasta donde terminara la repeticion de la  funcion
    //en este caso iniciara en 1 y terminara en 10 (la funcion se repetira 10 veces)
    let i :number;
    //Se declara la variable resultado para almacenar un resultado de una operacion
    let resultado:number

    //Se usa la funcion for para repetir el proceso, se declara i=1 (donde empezara), i<=10 (donde terminara)
    //i++(para que se le sume 1 a la i y se repita el proceso hasta cumplir con 10)
    for(i=1;i<=10;i++){

      //Se usa resultado para almacenar la operacion de las multiplicaciones
      resultado=this.num*i;
      //se usa total.push para guardar en el arreglo lo que se mostrara 
      total.push(this.num+"x"+i+"="+resultado);
      //el arreglo dentro de la funcion para lo almacenado al arreglo global que se mostrara en la vista
      this.total = total;

    }
  }

  ngOnInit(): void {
  }

}
