import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';
@Injectable()
export class GithubAuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        const authRequest = request.clone({
            /*headers: request.headers.set('Authorization', 'my github token')*/
        });
        return next
            .handle(authRequest)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
                }

            });
    }
}