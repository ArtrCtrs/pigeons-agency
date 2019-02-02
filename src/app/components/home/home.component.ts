import { PageDataService, HomePageDataAPIReturn } from './../../services/page-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    pageLoading: boolean = true;
    pageData: HomePageDataAPIReturn;

    constructor(private PageDataService: PageDataService) { }

    async ngOnInit() {
        this.pageData = await this.PageDataService.getHomePageData();
        this.pageLoading = false;
    }
}
