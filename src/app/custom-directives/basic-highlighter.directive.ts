import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlighter]' //[appBasicHighlighter]
})
export class BasicHighlighterDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

ngOnInit() {
  this.elementRef.nativeElement.style.backgroundColor = 'pink';
  this.elementRef.nativeElement.style.fontSize = '20px';
  this.elementRef.nativeElement.style.fontStyle = 'italic';
}
}
