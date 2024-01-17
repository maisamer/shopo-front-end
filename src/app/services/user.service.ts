import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from "src/app/model/user.model";
import { environment } from 'src/environments/environment';
import { AppConstants } from '../constants/app.constants';
import { getCookie } from 'typescript-cookie';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    
  }

  validateLoginDetails(user: User) {
    let xsrf = getCookie(AppConstants.XSRF_TOKEN);
    if(xsrf)
      window.sessionStorage.setItem(AppConstants.XSRF_TOKEN,xsrf); 
    window.sessionStorage.setItem(AppConstants.USER_DETAILS,JSON.stringify(user));
    return this.http.get(environment.rooturl + AppConstants.LOGIN_API_URL, { observe: 'response',withCredentials: true });
  }

  registerUser(user:User){
    let xsrf = getCookie(AppConstants.XSRF_TOKEN);
    if(xsrf)
      window.sessionStorage.setItem(AppConstants.XSRF_TOKEN,xsrf); 
    window.sessionStorage.setItem(AppConstants.USER_DETAILS,JSON.stringify(user));
    return this.http.post(environment.rooturl + AppConstants.REGITERATION_URL ,user,{ observe: 'response'});
  }

}