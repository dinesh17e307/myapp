import { Injectable } from '@angular/core';
import{Sch} from '../share/sch';
import {DISHES} from '../share/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishServicesService {

  constructor() { }

  getdishes():Sch[]{
    return DISHES;
  }
}
