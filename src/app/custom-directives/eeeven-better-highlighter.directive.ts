import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appEeevenBetterHighlighter]'
})

export class EeevenBetterHighlighterDirective implements OnInit {
  //alias 'appEeevenBetterHighlighter'
  @Input() defaultColor: string = 'yellow';
  @Input() highlightColor: string = "red";
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('style.fontSize') fontSize: string = '15px';
  @HostBinding('style.backgroundColor') backgroundColor: string;// = this.defaultColor;
  ngOnInit() {
    /**/ //this.renderer.listen('body', 'click', (event: any) => alert("You clicked on body"));
    this.backgroundColor = this.defaultColor;

  }

  @HostListener('mouseenter') onmouseover(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lemonchiffon');
    //this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '20px');
    this.backgroundColor = this.highlightColor;
    this.fontSize = '20px';
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-style', 'italic');
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', 'Dynamic Paragraph content from Code');
  }

  @HostListener('mouseleave') onmouseaway(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    //this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '15px');
    this.backgroundColor = this.defaultColor;
    this.fontSize = '15px';
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-style', 'normal');
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', 'I am styled with Basic appEevenBetterHighlighter custom directive');
  }

}