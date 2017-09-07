import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
 /* template: `
  <p>
    Here is details of the server.
  </p>
  `,*/
  styleUrls: ['./server.component.css']
  
  
})
export class ServerComponent implements OnInit {
@Input('server-data') server:  {name: string, state: string};
sizeOfFont: string = '30';
editable: boolean = false;
@Output('server-clicked') serverClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  clickServer() {
    this.serverClicked.emit('Hey you poked me!');
    this.sizeOfFont = this.sizeOfFont === '20' ? '30' : '20';
  }
  onSwitch() {
    this.server.state = this.server.state === "Offline" ? "Online" : "Offline";
  }

}
