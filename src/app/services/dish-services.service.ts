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
  getDish(id: string): Sch {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Sch {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
