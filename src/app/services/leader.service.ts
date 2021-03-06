import { Injectable } from '@angular/core';
import {Leader} from '../share/Leader';
import {LEADER} from '../share/leaders';
import { Observable,of, from } from 'rxjs';
import{delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {baseURL} from '../share/baseurl';
import {map,catchError} from 'rxjs/operators';
import { ProcessHTTPmsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient,private processhttpmsgservice:ProcessHTTPmsgService) { }
  getleader():Observable<Leader[]> {
    // return  new Promise(resolve=>{
    //   setTimeout(()=>resolve(LEADER),2000);
    // });
    return this.http.get<Leader[]>(baseURL+'leadership').pipe(catchError(this.processhttpmsgservice.handleError));
    // of(LEADER).pipe(delay(2000));
  }

  getFeaturedleader():Observable< Leader> {
    // return  new Promise(resolve=>{
    //   setTimeout(()=>resolve(LEADER.filter((Leader) => Leader.featured)[0]),2000);
    // });
    return this.http.get(baseURL+'leadership?featured=true').pipe(map(leadership=>leadership[0]))
    .pipe(catchError(this.processhttpmsgservice.handleError));
    // of(LEADER.filter((Leader)=>Leader.featured)[0]).pipe(delay(2000));
  }


}
