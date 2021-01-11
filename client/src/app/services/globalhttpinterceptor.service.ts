import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GlobalHttpInterceptorService implements HttpInterceptor {
  constructor(public router: Router) {}
  // Implements a global Http Error interceptor
  // catchError is added to the request pipeline using pipe which then uses throwError to throw the error to the component
  // Further logic can be used here - such as certain actions or messages based on returned error status codes
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
