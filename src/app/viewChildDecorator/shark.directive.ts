import { Directive , ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShark]'
})
export class SharkDirective {
  creature = 'Dolpgin';

  constructor(elem: ElementRef, renderer: Renderer2) {
    let shark = renderer.createText('Shark masa ');
    renderer.appendChild(elem.nativeElement, shark);
  }

}
