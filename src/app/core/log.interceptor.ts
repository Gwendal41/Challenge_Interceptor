import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs';


@Injectable()

export class LogInterceptor implements HttpInterceptor {

     start = new Date().getTime();

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const elapsed = new Date().getTime() - this.start;
        console.log(req.urlWithParams); 
        console.log(elapsed)
        return next.handle(req);
    }

}