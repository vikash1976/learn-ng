import { Observable } from 'rxjs/observable';
import { CommonService } from './common-services/services';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'myapp-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  AppTitle = 'Our Angular Learning App';
  dataOfInput: string = '';
  @ViewChild('input2') dataOfInput2: ElementRef;
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  server = {
    instanceType: "medium",
    name: "Production Server",
    status: "stable",
    startedOn: new Date(2016, 3, 14),
    cost: 300.8
  };

  inputDone(input: HTMLInputElement) {
    console.log(input);
    this.dataOfInput = input.value;
  }

  inputDone2(input: ElementRef) {
    console.log(this.dataOfInput2.nativeElement.value);

  }

  constructor(private _commonService: CommonService) {
    let idx = _.findIndex(this.accounts, { name: 'Hidden Account', status: 'unknown' });
    console.log("Hey, Hidden Account, i found you, you are here at position: " + idx);

  }

  onCustomEvent(event) {
    //window.alert(event);
  }

  dataAsObservable: Observable<string>;
  //observableData: string;
  observableData: { name: string, zip: string };
  dataAsPromise;

  ngOnInit() {
    //this.dataAsObservable = this._commonService.getDataAsObervable();
    /*this._commonService.getDataAsPromise()
      .then((data) =>
        this.dataAsPromise = data)
      .catch(error => console.log(error));

      this._commonService.getDataAsObervable()
      .subscribe((data) => this.observableData = data);*/
  }


}
