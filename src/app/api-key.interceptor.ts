import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap } from "rxjs/operators";

export function apiKeyInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  const token = localStorage.getItem('token');

  if (!token) {
    console.log('API request attempted without authorization token');
    return throwError(() => new Error('Missing authorization token'));
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
