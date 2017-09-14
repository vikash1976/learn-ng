import { LoggingService } from './common-services/logging.service';
import { Observable } from 'rxjs';
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
  myNumberStream: Observable<number>;
  subscriptionHandle: any;
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

  constructor(private _commonService: CommonService, private _loggingService: LoggingService) {
    let idx = _.findIndex(this.accounts, { name: 'Hidden Account', status: 'unknown' });
    this._loggingService.setLogLevel("ERROR");
    this._loggingService.logAccountDetails("Hey, Hidden Account, i found you, you are here at position: " + idx);
    this._loggingService.logAccountDetails("In Constructor of main app");

  }

  onCustomEvent(event) {
    //window.alert(event);
  }

  dataAsObservable: Observable<{ name: string, zip: string }>;
  //observableData: string;
  observableData: { name: string, zip: string };
  dataAsPromise;

  ngOnInit() {
    /*this.dataAsObservable = this._commonService.getDataAsObervable();
    this._commonService.getDataAsPromise()
      .then((data) =>
        this.dataAsPromise = data)
      .catch(error => console.log(error));

      this._commonService.getDataAsObervable()
      .subscribe(
        (data) => {
        this.observableData = data;
      this._loggingService.logAccountDetails(data);});

      this._commonService.getEmployeeDataFromFakeJSON()
      .subscribe(
        (employees) => { this._loggingService.logAccountDetails(employees)},
        (error) => { this._loggingService.logAccountDetails(error)}
      );

    this.myNumberStream = Observable.interval(1000)
      .map((data: number) => { return data + 5 })
      .filter((data: number) => data % 3 == 0);
    this.subscriptionHandle = this.myNumberStream
    //.debounceTime(3800)
    //throttleTime(20000)
    .subscribe(num => this._loggingService.logAccountDetails(num));

    setTimeout(() => {this.subscriptionHandle.unsubscribe()}, 40000);*/

  }





}
