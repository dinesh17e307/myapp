import { Component, OnInit ,Inject} from '@angular/core';
import{Leader} from '../share/leader';
import{LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    leader:Leader[];
    errormsg:string;
  constructor(private leaderservice:LeaderService,@Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    this.leaderservice.getleader().subscribe(leader=>this.leader=leader,errormsg=>this.errormsg=<any>errormsg);
  }

}
