import { Injectable } from '@angular/core';
import { Promotion } from '../share/promotion';
import { of,Observable} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import{HttpClient} from '@angular/common/http';
import {baseURL} from '../share/baseurl';
import { ProcessHTTPmsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient,private processhttpmsgservice:ProcessHTTPmsgService) { }

  getPromotions(): Observable<Promotion[]> {

return this.http.get<Promotion[]>(baseURL+'promotions');
  }

  getPromotion(id: string): Observable<Promotion> {

    return this.http.get<Promotion>(baseURL+'promotions/'+id).pipe(catchError(this.processhttpmsgservice.handleError));;
  }

  getFeaturedPromotion():Observable< Promotion> {
    return this.http.get<Promotion>(baseURL+'promotions?featured=true').pipe(map(promotions => promotions[0]))
    .pipe(catchError(this.processhttpmsgservice.handleError));;
  }
}