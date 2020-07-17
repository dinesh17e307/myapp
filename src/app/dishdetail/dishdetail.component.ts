import { Component, OnInit ,Input} from '@angular/core';
import {Sch} from '../share/sch';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    @Input()
    dish=Sch;
  constructor() { }

  ngOnInit(): void {
  }

}
