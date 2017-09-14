import { Http } from '@angular/http';

import { OnInit, Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable()
export class CommonService {
    //myCustomObservable: Observable<string>
    myCustomObservable: Observable<{name: string, zip: string}>

    constructor(private _http: Http){}

    getDataAsObervable(): Observable<{name: string, zip: string}> {
        return Observable.create((observer: Observer<{name: string, zip: string}>) => {
            setTimeout(() => {
                observer.next({name: "VP", zip: "411007"});
                //observer.next("Data from observable at 2000ms");
            }, 2000);
            setTimeout(() => {
                observer.next({name: "PV", zip: "411021"});
                //observer.next("Data from observable at 4000ms");
            }, 4000);
            /*setTimeout(() => {
              observer.error("erroring by choice!");
            }, 6000);*/
            setTimeout(() => {
                observer.next({name: "DT", zip: "110011"});
                //observer.next("Data from observable at 7000ms");
            }, 7000);
            setTimeout(() => {
              observer.complete();
            }, 6000)
        }

        );
    }
    getDataAsPromise(): Promise<string> {
        return new Promise(resolve =>
            setTimeout(() => resolve("Data One From Promise"), 5000),
        );

    }

    getEmployeeDataFromFakeJSON() {
        return this._http.get('http://localhost:3000/employees').map((resp) => resp.json());
    }
}