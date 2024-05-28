import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpEvent
} from '@angular/common/http';
import {Observable} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {

 let token =  localStorage.getItem('token');
  console.log('passe')

  if (token) {
    console.log('passe')
    const cloned = req.clone({
      setHeaders: {
        authorization: "Bearer " + token,
      },
    });
    return next(cloned);
  } else {
    return next(req);
  }
};
