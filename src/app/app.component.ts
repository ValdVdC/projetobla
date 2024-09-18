import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetobla';
  frase=''
  imprime(value:string){
    this.frase = value
  }
  modo='tema1'
  mudaTema(value:string){
    console.log(value)
    this.modo = value
  }
  guardaCor=""
  mudaCor(value:string){
    this.guardaCor=value
  }
  guardaFonte=""
  mudaFonte(value:string){
    this.guardaFonte=value
  }
  guardaTamanho=""
  mudaTamanho(value:string){
    this.guardaTamanho=value
  }
  enxerga(value:any){
    console.log(value.target.value)
  }
}
