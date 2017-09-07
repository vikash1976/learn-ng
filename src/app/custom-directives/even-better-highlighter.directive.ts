import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEvenBetterHighlighter]'
})
export class EvenBetterHighlighterDirective implements OnInit{

  constructor(/*private elementRef: ElementRef, private renderer: Renderer2*/) { }

  ngOnInit() {
    //this.renderer.listen('body', 'click', (event: any) => alert("You clicked on body"));

  }
  @HostBinding('style.fontSize') fontZZZ: string = '10px';
  @HostBinding('style.backgroundColor') bgC: string = 'blue';

  @HostListener('mouseenter') onmouseover(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lemonchiffon');
    this.bgC = 'red';
    //this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '20px');
    this.fontZZZ = '20px';
    //this.renderer.setStyle(this.elementRef.nativeElement, 'font-style', 'italic');
    //this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', 'Dynamic Paragraph content from Code');
  }

  @HostListener('mouseleave') onmouseaway(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    //this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '15px');
    this.bgC = 'blue';
    this.fontZZZ = '10px';
    //this.renderer.setStyle(this.elementRef.nativeElement, 'font-style', 'normal');
    //this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', 'I am styled with Basic appEvenBetterHighlighter custom directive');
  }

}
