import { Injectable } from '@angular/core';


export class LoggingService {
  
  private logLevel: string;
  setLogLevel(level) {
    this.logLevel = level;
  }
  constructor() { }
  logAccountDetails(message: any) {
    if (this.logLevel === "INFO") {
      console.info(message);
    } else if (this.logLevel === "WARN"){
      console.warn(message);
    } else if (this.logLevel === "DEBUG"){
      console.debug(message);
    } else if (this.logLevel === "ERROR"){
      console.error(message);
    } else {
      console.log(message);
    }
  }

}
