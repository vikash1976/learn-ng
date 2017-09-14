import { Http } from '@angular/http';
import { LoggingService } from './../common-services/logging.service';
import { Component, OnInit, Inject, Optional, Injectable } from '@angular/core';

import *  as moment from 'moment';

class DummyLogger {
  private logLevel: string;
  setLogLevel(level) {
    this.logLevel = level;
  }
  constructor() { }
  logAccountDetails(message: any) {
    let dummyLoggerMsg =  message;
    if (this.logLevel === "INFO") {
      console.info(dummyLoggerMsg);
    } else if (this.logLevel === "WARN") {
      console.warn(dummyLoggerMsg);
    } else if (this.logLevel === "DEBUG") {
      console.debug(dummyLoggerMsg);
    } else if (this.logLevel === "ERROR") {
      console.error(dummyLoggerMsg);
    } else {
      console.log(dummyLoggerMsg);
    }
  }
}

class MyDreamLogger {
  //yet to visualize the dream
}

interface DataPuller {
  pullData();
}
@Injectable()
class DataPuller1 implements DataPuller {

  constructor(private logService: LoggingService) { }
  pullData() {
    //pulling data....
    this.logService.setLogLevel("INFO");
    this.logService.logAccountDetails("Data Puller1 Service Logging this!!");
  }
}

@Injectable()
class DataPuller2 implements DataPuller {

  constructor(private logService: LoggingService) { }
  pullData() {
    //pulling data....
    this.logService.setLogLevel("DEBUG");
    this.logService.logAccountDetails("Data Puller2 Service Logging this!!");
  }
}
//https://api.github.com/users/vikash1976
//http://localhost:3000/employees
@Component({
  selector: 'app-explore-di',
  templateUrl: './explore-di.component.html',
  styleUrls: ['./explore-di.component.css'],
  providers: [
    { provide: LoggingService, useClass: DummyLogger },
    { provide: 'endpointURL', useValue: 'http://localhost:3000/employees' },
    {
      provide: 'DataPuller', useFactory: (logService: LoggingService) => {
        if (moment().date() === 10)
          return new DataPuller1(logService);
        else
          return new DataPuller2(logService);
      },
      deps: [LoggingService]
    }
    
  ]
})
export class ExploreDiComponent implements OnInit {
  logger: LoggingService;
  _http: Http;
  endpoint: any;
  dataPuller: DataPuller;
  constructor( @Inject(LoggingService) logger,
    @Inject(Http) http,
    @Inject('endpointURL') endpointURL,
    @Inject('DataPuller') dataPuller,
    @Optional() myDreamLogger: MyDreamLogger) {
    if (myDreamLogger) {
      window.alert('Got my dream logger!!');
    }
    else {
      window.alert('my dream logger missing');
    }
    this.logger = logger;
    this._http = http;
    this.endpoint = endpointURL;
    this.dataPuller = dataPuller;
  }

  ngOnInit() {
    this.logger.setLogLevel("WARN");
    this.logger.logAccountDetails("I am exploring DI!");
    this._http.get(this.endpoint)
      .map(resp => resp.json())
      .subscribe(
      data => this.logger.logAccountDetails(data)
      )

    this.dataPuller.pullData();
    let now = moment().format('LLLL');
    console.log(moment().date());

  }

}
