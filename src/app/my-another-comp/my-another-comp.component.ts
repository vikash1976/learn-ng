import {
  Component, OnInit,
  Input, Output,
  EventEmitter, ContentChild,
  ElementRef, AfterContentInit,
  AfterContentChecked
} from '@angular/core';

@Component({
  selector: 'app-my-another-comp',
  templateUrl: './my-another-comp.component.html',
  styleUrls: ['./my-another-comp.component.css']
})
export class MyAnotherCompComponent implements OnInit, 
  AfterContentInit, AfterContentChecked {

  @Input('my-message') myMessage: string;
  @Input('message-index') msgIndex: number;
  @Output() customEvent: EventEmitter<number> = new EventEmitter<number>();
  @ContentChild('messageIdentifier') msgIdentifier: ElementRef;
  enrichedMessageNum: string;
  constructor() { }

  ngOnInit() {
    console.log("OnInit: MyAnotherCompComponent - Message Identifier is: " + this.msgIdentifier.nativeElement.textContent);
  }
  ngAfterContentInit() {
    console.log("AfterContentInit: MyAnotherCompComponent - Message Identifier is: " + this.msgIdentifier.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked: MyAnotherCompComponent - Message Identifier is: " + this.msgIdentifier.nativeElement.textContent);
    this.enrichedMessageNum = "MSG00." + this.msgIdentifier.nativeElement.textContent;
  }

  onMouseOver() {
    this.customEvent.emit(100);
  }

}
