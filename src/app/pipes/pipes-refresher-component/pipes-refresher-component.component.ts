import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

@Component({
  selector: 'app-pipes-refresher-component',
  templateUrl: './pipes-refresher-component.component.html',
  styleUrls: ['./pipes-refresher-component.component.css']
})
export class PipesRefresherComponentComponent implements OnInit {
  person$;
  readyToLoadPerson = false;
  person;
  filterCriteria = '';
  filterOnField = '';
  myServers = [
    {
      instanceType: "medium",
      name: "Production Server",
      status: "stable",
      startedOn: new Date(2016, 3, 14),
      cost: 300.8
    },
    {
      instanceType: "large",
      name: "User Database",
      status: "stable",
      startedOn: new Date(2016, 7, 16),
      cost: 106.68
    },
    {
      instanceType: "small",
      name: "Dev Server",
      status: "offline",
      startedOn: new Date(2014, 5, 9),
      cost: 100.9799
    },
    {
      instanceType: "small",
      name: "Test Server",
      status: "critical",
      startedOn: new Date(2017, 6, 17),
      cost: 70.978
    }
  ];
  getClassPerServerStatus(server) {
    return {
      'list-group-item-success': server.status == 'stable',
      'list-group-item-warning': server.status == 'offline',
      'list-group-item-danger': server.status == 'critical',
    }
  }
  constructor(private http: Http) { }

  ngOnInit() {
    /*this.person$ = this.http.get('/assets/person.json')
     .map(person => person.json())*/

  }
  fetchPerson() {
    this.readyToLoadPerson = true;
    setTimeout(() => {
    this.person$ = this.http.get('/assets/person.json')
      .map(person => person.json())
      

    }, 1000);
  }
}

