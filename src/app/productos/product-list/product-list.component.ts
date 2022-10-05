import { Component, OnInit } from '@angular/core';
import {IProducto} from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  productos:IProducto[]=[
    {
      "productoId":1,
      "modelo":"sentra",
      "descripcion": "Auto elegante",
      "marca":'Nissan',
      "año":2022,
      "precio":540900,
      "puntos":3.6,
      "ImagenUrl":"https://th.bing.com/th/id/R.2ddec9b457a61c00d9da9b8140e08c03?rik=QdI0Vkcn5iHyaA&riu=http%3a%2f%2fwww.autosymoda.mx%2fwp-content%2fuploads%2f2020%2f06%2fFoto-4_.jpg&ehk=OX8T276yufvt8f%2bBDk0Ilyf9E9WJydLdAAjkMTVGhac%3d&risl=&pid=ImgRaw&r=0"
    },

    {
      "productoId":2,
      "modelo":'RX8',
      "descripcion": "Todo terreno",
      "marca":'MG',
      "año":7889,
      "precio":89000,
      "puntos":5.5,
      "ImagenUrl":"https://th.bing.com/th/id/OIP.jqL-yX9xnbIMXychc613IgHaEV?pid=ImgDet&rs=1"
    },

    {
      "productoId":3,
      "modelo":'Hibrido',
      "descripcion": "Comodidad",
      "marca":'Toyota',
      "año":6677,
      "precio":89000,
      "puntos":5.5,
      "ImagenUrl": "https://th.bing.com/th/id/R.0399d957ac5c406515942a2a4c44c8bf?rik=xYBtrxEVu1APfQ&pid=ImgRaw&r=0"
     }


  ]

  constructor() { }

  ShowImagen():void{
    this.muestraImg=!this.muestraImg;
  }
  ngOnInit(): void {
  }

}
