import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.less']
})
export class LeaderboardComponent implements OnInit {
  pageLoading: boolean = true;
  allusers: User[];

  constructor(private PageDataService: PageDataService) { }

  ngOnInit() {
    this.initLeaderboard();
  }

  async initLeaderboard() {
    this.allusers = (await this.PageDataService.getLeaderboardData()).data;
    this.pageLoading = false;
    console.log(this.allusers);

  }

}
