import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    console.log(this.elementRef);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lemonchiffon');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-style', 'italic');
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', 'Dynamic Text from Code');

    //this.renderer.listen('body', 'click', (event: any) => alert("You clicked on body"));

  }
}
