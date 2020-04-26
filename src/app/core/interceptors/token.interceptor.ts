import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("inside interceptor----");
    let req;
    req = request.clone({
      headers: new HttpHeaders({
        'access-control-allow-headers':
        'Origin, X-Requested-With, Content-Type, Accept',
        'server': 'cloudflare-nginx',
        'access-control-allow-methods': 'GET, POST, PUT',
        'access-control-allow-origin': '*'
      })
    });

    return next.handle(req);
  }
}
