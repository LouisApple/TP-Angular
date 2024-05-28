import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap } from "rxjs/operators";

const authUrl = 'http://localhost:8080/auth';

export function apiKeyInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  const token = localStorage.getItem('token');

  // Check if the request URL excludes the auth endpoint
  if (!token || req.url.startsWith(authUrl)) {
    return next(req); // Don't add header if token is missing or URL starts with authUrl
  }

  if (!token && !req.url.startsWith(authUrl)) {
    console.log('API request attempted without authorization token');
    return throwError(() => new Error('Missing authorization token for non-auth requests'));
  }

  const reqWithHeader = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(reqWithHeader).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log(req.url, 'returned a response with status', event.status);
      }
    })
  );
}
