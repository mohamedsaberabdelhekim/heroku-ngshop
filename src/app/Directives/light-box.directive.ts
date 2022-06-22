import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective {

  constructor(private element: ElementRef ) {
    this.element.nativeElement.style.backgroundColor = "#000000";
   }

}
