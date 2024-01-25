import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getOrders(){
    return this.http.get(environment.rooturl + AppConstants.LIST_ORDERS ,{ observe: 'response',withCredentials: true });
  }
}
