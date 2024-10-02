import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMudaCor]'
})
export class MudaCorDirective {
@HostBinding('style.color') cor: string = 'red'
@HostBinding('style.font-family') fonte: string = 'arial'

@HostListener('mouseover') onMouseOver(){
  this.cor = 'blue'
  this.fonte = 'verdana'
}
@HostListener('mouseout') onMouseOut(){
  this.cor = 'red'
  this.fonte = 'arial'
}
  constructor() { }

}
