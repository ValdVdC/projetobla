import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { BuscadorComponent } from './paginas/buscador/buscador.component';
import { DetalhesComponent } from './paginas/detalhes/detalhes.component';

const routes: Routes = [
  {
    path: '',component:HomeComponent
  },
  {
    path: 'buscador',component:BuscadorComponent
  },
  {
    path: 'detalhes', component:DetalhesComponent
  },
  {
    path:'**',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
