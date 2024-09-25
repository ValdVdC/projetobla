import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  isLogged = true
  aulas = ['back','front','mob','bd']
  usuarios = [
    {nome:'a',aula:'b'},
    {nome:'c',aula:'d'},
    {nome:'e',aula:'f'},
    {nome:'g',aula:'h'},
    {nome:'i',aula:''}

  ]
  nomes:any = []
  cadastrar(event:any){
    this.nomes.push(event.target.value)
  }
}
