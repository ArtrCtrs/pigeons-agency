import { PageDataService, HomePageDataAPIReturn } from './../../services/page-data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    pageLoading: boolean = true;
    user:User;
    interval:any;

    constructor(private PageDataService: PageDataService) { }

    async ngOnInit() {
        this.user = (await this.PageDataService.getHomePageData()).data;
        this.pageLoading = false;
        this.interval = setInterval(() => { this.upDateFrontInfo(); }, 1000);
    }

    upDateFrontInfo() {
        console.log("m")
        this.user.seeds = this.user.seeds < this.user.maxseeds ? this.user.seeds + (this.user.seedsminute / 60) : this.user.maxseeds;
        this.user.droppings = this.user.droppings < this.user.maxdroppings ? this.user.droppings + (this.user.totaldroppingsminute / 60) : this.user.maxdroppings;
    }

    ngOnDestroy(){
        clearInterval(this.interval);
    }
}
