import { Component, OnInit } from '@angular/core';
import { Articulos } from './articulos';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos : any= [
    new Articulos(1, 'Jabon', 30),
    new Articulos(2, 'Shampoo', 38),
    new Articulos(3, 'Pinol', 23),
    new Articulos(4, 'Papel', 38),
    new Articulos(5, 'Cloro', 40)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
