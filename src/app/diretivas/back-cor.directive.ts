import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackCor]'
})
export class BackCorDirective {
@HostBinding('style.background') back = ''
@HostListener('keyup') mudaBack(){
  let r = Math.random()*255
  let g = Math.random()*255
  let b = Math.random()*255
  this.back = `rgb(${r},${g},${b})`
}
  constructor() { }

}
