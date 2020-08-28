import { Injectable } from '@angular/core';
import{Sch} from '../share/sch';
import {Observable,of} from 'rxjs';
import { delay} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../share/baseurl';
import {map,catchError} from 'rxjs/operators';
import { ProcessHTTPmsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class DishServicesService {

  constructor( private http:HttpClient,private processhttpmsgservice:ProcessHTTPmsgService) { }

  getdishes():Observable<Sch[]>{
    return  this.http.get<Sch[]>(baseURL + 'dishes').pipe(catchError(this.processhttpmsgservice.handleError));

  }
  getDish(id: string):Observable< Sch> {
    return this.http.get<Sch>(baseURL+'dishes/'+id)
    .pipe(catchError(this.processhttpmsgservice.handleError));;
     
  }

  getFeaturedDish():Observable< Sch> {
    return  this.http.get<Sch[]>(baseURL+'dishes?featured=true').pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processhttpmsgservice.handleError));;
  }
  getdishid():Observable<string[] | any>{
    return this.getdishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error=>error));
  }
   putdish(dish: Sch): Observable<Sch> {
     const httpOptions={
       headers: new HttpHeaders({
         'Content-Type':'application/json'
       })
     };
    return  this.http.put<Sch>(baseURL+'dishes/'+dish.id,dish,httpOptions)
    .pipe(catchError(this.processhttpmsgservice.handleError));
   }
}
