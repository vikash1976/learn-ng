import { Observable } from 'rxjs';
import { ServerDataService } from './server.data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GitUserResponse} from './servers.data';

/*
interface GitUserResponse {
  login: string;
  bio: string;
  company: string;
  location: string;
  updated_at: string;
}*/
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: {name: string, state: string, remarks: string} [] = [
    {'name': 'Production', 'state': 'Online', remarks: 'Bad'},
    {'name': 'Test', 'state': 'Offline', remarks: 'Bad'},
    {'name': 'Development', 'state': 'Online', remarks: 'Bad'}
  ];
  gitDetails$: Observable<GitUserResponse>;
  gitDetails: GitUserResponse;
  //servers = servers;
  constructor(private _serverDataService: ServerDataService) { }

  ngOnInit() {
    this.gitDetails$ = this._serverDataService.getServerData();
    /*this.gitDetails$.subscribe(data => {
      this.gitDetails = data;
      console.log(data);
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });*/
  }
  serverEvent(event) {
    window.alert(event);
  }

}
