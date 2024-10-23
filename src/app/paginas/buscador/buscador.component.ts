import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  //injetar bibliotecas
  //forma 1
  pokemon:any = null
  constructor(private http:HttpClient){}
  getPokemon(obj:any){
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${obj.target.value}
      `)
    .subscribe({
      next:(data:any)=>{
        console.log(data)
        this.pokemon=data
      },
      error:(error:any)=>{
        console.log(error.status)
        if(error.status==404){
          alert('Não existe animal')
        }
      }
    })
  }

  //forma 2, mais morderna
  //usando a biblioteca inject
  //private http = inject(HttpClient)
  
}
