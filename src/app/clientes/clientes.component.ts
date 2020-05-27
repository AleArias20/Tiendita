import { Component, OnInit } from '@angular/core';
import { Clientes } from './clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

    clientes : any= [
    new Clientes('Alejandra', 'Arias', 6145486606),
    new Clientes('Danae', 'Rodriguez', 6143846254),
    new Clientes('Paulina', 'Arias', 6145784512),
    new Clientes('Victoria', 'Ponce', 6143224715),
    new Clientes('Lorena', 'Rascon', 6142874758)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
