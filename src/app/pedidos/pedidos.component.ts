import { Component, OnInit } from '@angular/core';
import { Pedidos } from './pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

    pedidos : any= [
    new Pedidos(10844, 'Alejandra', '22-Diciembre-2019', 4500),
    new Pedidos(10845, 'Danae', '1-Enero-2020', 3800),
    new Pedidos(10846, 'Lorena', '14-Marzo-2020', 2013),
    new Pedidos(10847, 'Paulina', '28-Mayo-2020', 1840),
    new Pedidos(10848, 'Victoria', '4-junio-2020', 4650)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
