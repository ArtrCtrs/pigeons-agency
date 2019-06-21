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
  mainuser: User;
  page:number;

  constructor(private pageDataService: PageDataService) { }

  ngOnInit() {
    this.page=1;
    this.initLeaderboard();
  }

  async initLeaderboard() {
    this.allusers = (await this.pageDataService.getLeaderboardData()).data;
    await this.getPlayerInfo();
    this.pageLoading = false;
  }

  async getPlayerInfo() {
    this.mainuser = (await this.pageDataService.getHomePageData()).data;
  }

}
