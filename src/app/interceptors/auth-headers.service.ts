import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MsalService } from '../services/msal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHeadersInterceptor implements HttpInterceptor {

  constructor(private msalService: MsalService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${this.msalService.accessToken}`
      }
    });
    return next.handle(request);
  }
}
