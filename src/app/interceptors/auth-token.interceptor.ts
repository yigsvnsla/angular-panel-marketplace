import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptor {
  constructor(
    // private store: Store<RootState>
  ) { }

  // private isThirdPartyRequest(url: string): boolean {
  //   return url.startsWith(environment.URL) === false
  // }

  // public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  //   let userToken: string = '';
  //   this.store.select(selectorUserToken).subscribe(token => userToken = token).unsubscribe();
  //   if (!userToken || this.isThirdPartyRequest(req.url)) return next.handle(req);

  //   const requestWhithHeader = req.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${userToken}`,
  //     }
  //   })
  //   return next.handle(requestWhithHeader);
  // }

}
