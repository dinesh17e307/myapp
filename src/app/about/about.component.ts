import { Component, OnInit } from '@angular/core';
import{Leader} from '../share/leader';
import{LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    leader:Leader[];
  constructor(private leaderservice:LeaderService) { }

  ngOnInit(): void {
    this.leader=this.leaderservice.getleader();
  }

}
