import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNotIf]'
})
export class NotIfDirective {
  @Input() set appNotIf(condition: boolean) {
    if(!condition) {
      console.log(this.viewContainerRef);
      console.log(this.templateRef);
      this.viewContainerRef.createEmbeddedView(this.templateRef);

    }else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
