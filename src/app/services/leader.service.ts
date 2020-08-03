import { Injectable } from '@angular/core';
import {Leader} from '../share/Leader';
import {LEADER} from '../share/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getleader():Leader[] {
    return LEADER;

  }

  getFeaturedleader(): Leader {
    return LEADER.filter((Leader) => Leader.featured)[0];
  }


}
