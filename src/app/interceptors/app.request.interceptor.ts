import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import { User } from 'src/app/model/user.model';
import { AppConstants } from '../constants/app.constants';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  user = new User();
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req);
    let httpHeaders = new HttpHeaders();
    if(req.withCredentials && sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if(this.user && this.user.password && this.user.email){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.email + ':' + this.user.password));
    }
    let xsrf = sessionStorage.getItem(AppConstants.XSRF_TOKEN); 
    if(xsrf)
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    httpHeaders = httpHeaders.append("CHANNEL","WEB");
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
  return next.handle(xhr).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['home']);
        }
      }));
  }
}