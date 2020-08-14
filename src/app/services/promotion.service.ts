import { Injectable } from '@angular/core';
import { Promotion } from '../share/promotion';
import { of,Observable, from } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import {baseURL} from '../share/baseurl';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) { }

  getPromotions(): Observable<Promotion[]> {

return this.http.get<Promotion[]>(baseURL+'promotions');
  }

  getPromotion(id: string): Observable<Promotion> {

    return this.http.get<Promotion>(baseURL+'promotions/'+id);
    // of(PROMOTIONS.filter((promo)=>promo.id===id)[0]).pipe(delay(2000));
  }

  getFeaturedPromotion():Observable< Promotion> {
    return this.http.get<Promotion>(baseURL+'promotions?featured=true');
    // of(PROMOTIONS.filter((promotion)=>promotion.featured)[0]).pipe(delay(2000));
  }
}