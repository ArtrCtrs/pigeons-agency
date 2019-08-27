import { Component, OnInit } from '@angular/core';
import { MerchantService } from 'src/app/services/merchant.service';
import { PageDataService } from 'src/app/services/page-data.service';
import tradeList from '../../lists/tradeList';
import tradeInfo from 'src/app/interfaces/trade-info';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.less']
})
export class MerchantComponent implements OnInit {

  user: User;
  now: number;
  tradeList: tradeInfo[] = tradeList;
  pageLoading:boolean=true;

  constructor(public merchantService: MerchantService,public pageDataService: PageDataService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  async getUserInfo() {
    this.now = Date.now();
    this.user = (await this.pageDataService.getHomePageData()).data;
    this.pageLoading = false;
  }

  async honorPointsToFeathers() {
    this.now = Date.now();
    this.user = (await this.merchantService.honorpointsToFeathers()).data;
  }

  async feathersToDroppings() {
    this.now = Date.now();
    this.user = (await this.merchantService.feathersToDroppings()).data;
  }

}
export interface MerchantPageDataAPIReturn {
  message: string;
  data:User
}
