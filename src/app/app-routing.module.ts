import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// se agregar modulo
import {ArticulosComponent} from './articulos/articulos.component';
import {ClientesComponent} from './clientes/clientes.component';
import {PedidosComponent} from './pedidos/pedidos.component';

//por ultimo modificar el arreglo de las rutas
const routes: Routes = [
  {path: 'articulos', component: ArticulosComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'pedidos', component: PedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
