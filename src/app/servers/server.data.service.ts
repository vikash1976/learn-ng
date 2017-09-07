import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GitUserResponse} from './servers.data';

@Injectable()
export class ServerDataService {
    constructor(private _httpClient: HttpClient, private _http: Http) { }

    getServerData() {
        return this._httpClient.get<GitUserResponse>('https://api.github.com/users/vikash1976');

    }
    getServerDataDummy() {
        return this._http.get('/assets/gitDetails.json').map((resp) => resp.json());

    }
}