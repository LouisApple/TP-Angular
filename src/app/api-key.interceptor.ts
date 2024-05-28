import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpInterceptorFn, HttpHeaderResponse, HttpSentEvent, HttpProgressEvent, HttpUserEvent
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const apiKeyInterceptor: (req: HttpRequest<any>, next: HttpHandler) => Observable<HttpSentEvent | HttpHeaderResponse | HttpResponse<any> | HttpProgressEvent | HttpUserEvent<any>> = (req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpResponse<any> | HttpProgressEvent | HttpUserEvent<any>> => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.warn('API request attempted without authorization token');
    return throwError(() => new Error('Missing authorization token'));
  }

  // Clone the request and add the authorization header
  const reqWithKey = req.clone({
    setHeaders: { Authorization: `Bearer ' + ${token}` }
  });

  return next.handle(reqWithKey).pipe(
    catchError(error => {
      // Centralized error handling for API responses
      console.error('API request error:', error);
      // Handle specific errors or generic error messages as needed
      return throwError(error);
    })
  );
};
