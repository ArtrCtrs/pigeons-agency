import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AttackService } from 'src/app/services/attack.service';
import { Router } from "@angular/router"
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.less']
})
export class AttackComponent implements OnInit {
  pageLoading: boolean = true;
  allusers: User[];
  mainuser: User;
  now: number;
  page:number;
  
  interval: any;

  constructor(private router: Router, private AttackService: AttackService, public pageDataService: PageDataService) { }

  ngOnInit() {
    this.page=1;
    this.initAttackList();
    this.interval = setInterval(() => { this.upDateFrontInfo(); }, 10000);
  }

  async initAttackList() {
    this.now = Date.now();
    this.allusers = (await this.AttackService.getAttackboardData()).data;
    await this.getPlayerInfo();
    this.pageLoading = false;
  }

  async attackPlayer(id: number) {
    await this.AttackService.attackPlayer({
      userid: id
    });
    this.router.navigate(['messages']);
  }

  async getPlayerInfo() {
    this.mainuser = (await this.pageDataService.getHomePageData()).data;
  }

  upDateFrontInfo() {
    this.now=Date.now();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
}

}
