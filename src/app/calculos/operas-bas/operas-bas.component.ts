import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {
  num1:string='';
  num2:string='';
  result:string='';
  resultado:number=0;


select():void{

  if(this.result=="sumar"){
    this.sumar();
  }
  else if(this.result=="restar"){
    this.restar();
    
  }
  else if(this.result=="multiplicar"){
    this.multiplicar();
    
  }
  else if(this.result=="dividir"){
    this.dividir();
  }
}

  constructor() { }

  sumar():void{
    this.resultado= parseInt(this.num1)+parseInt(this.num2);
  }

  restar():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }

  multiplicar():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
  }

  dividir():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }

  ngOnInit(): void {
  }

}
