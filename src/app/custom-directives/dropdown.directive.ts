import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;
  constructor() { }
    /*@HostListener('click') buttonClicked(eventData: Event) {
      this.isOpen = !this.isOpen;
    }*/
  @HostListener('mouseenter') mouseEntered(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
  @HostListener('mouseleave') mouseLeft(eventData: Event) {
    this.isOpen = !this.isOpen;
  }


}
