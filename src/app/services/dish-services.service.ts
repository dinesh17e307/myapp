import { Injectable } from '@angular/core';
import{Sch} from '../share/sch';
import {Observable,of} from 'rxjs';
import { delay} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../share/baseurl';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DishServicesService {

  constructor( private http:HttpClient) { }

  getdishes():Observable<Sch[]>{
    return  this.http.get<Sch[]>(baseURL + 'dishes');

  }
  getDish(id: string):Observable< Sch> {
    return this.http.get<Sch>(baseURL+'dishes/'+id);
     
  }

  getFeaturedDish():Observable< Sch> {
    return  this.http.get<Sch[]>(baseURL+'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }
  getdishid():Observable<string[] | any>{
    return this.getdishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
}
