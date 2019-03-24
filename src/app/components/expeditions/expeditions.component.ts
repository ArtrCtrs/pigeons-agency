import { Component, OnInit } from '@angular/core';
import expeditionsList from '../../lists/expeditionsList';
import { ExpeditionsService } from 'src/app/services/expeditions.service';
import { ExpeditionInfo } from 'src/app/interfaces/expedition-info';
import { PageDataService } from 'src/app/services/page-data.service';
import { User } from 'src/app/interfaces/user';
import ActiveExpedition from 'src/app/interfaces/active-expedition';
import Expedition from 'src/app/interfaces/expedition';

@Component({
    selector: 'app-expeditions',
    templateUrl: './expeditions.component.html',
    styleUrls: ['./expeditions.component.less']
})
export class ExpeditionsComponent implements OnInit {

    pageLoading: boolean = true;
    filteredExpeditionsInfo: ExpeditionInfo[] = [];
    expeditionsInfo: ExpeditionInfo[] = [];
    myExpeditions: ActiveExpedition[] = [];
    user: User;
    nbrExpeditions: number=0;
    interval: any;

    constructor(public expeditionsService: ExpeditionsService, public pageDataService: PageDataService) {
    }

    ngOnInit() {
        this.expeditionsInfo = expeditionsList;
        this.filteredExpeditionsInfo = this.expeditionsInfo;
        this.getExpeditionsData();

        this.interval = setInterval(() => { this.upDateFrontInfo(); }, 1000);
    }

    async getExpeditionsData() {
        this.nbrExpeditions=0;
        const expeditions: Expedition[] = (await this.expeditionsService.getExpeditionsData()).data;
        this.myExpeditions = [];
        expeditions.forEach(exp => {
            const activeExp: ActiveExpedition = { expedition: exp, expeditionname: this.getExpeditionName(exp.type), remainingtime: this.getRemainingTime(exp.starttime, exp.duration) };
            this.myExpeditions.push(activeExp);
            this.nbrExpeditions++;
        }, this);
        await this.getPlayerInfo();
        this.pageLoading = false;
    }
    async getPlayerInfo() {
        this.user = (await this.pageDataService.getHomePageData()).data;
    }

    async launchExpedition(id: number) {
        this.nbrExpeditions++;
        await this.expeditionsService.launchExpedition({
            expeditiontype: id
        });
        await this.getExpeditionsData();

    }

    upDateFrontInfo() {
        this.user.seeds = this.user.seeds < this.user.maxseeds ? this.user.seeds + (this.user.seedsminute / 60) : this.user.maxseeds;
        //console.log(this.nbrExpeditions)
        this.myExpeditions.forEach(function (exp) {
            if (!exp.expedition.finished) {
                exp.remainingtime = this.getRemainingTime(exp.expedition.starttime, exp.expedition.duration);
                if (exp.remainingtime <= 0) {
                    this.user.birds = this.user.birds < this.user.maxbirds ? this.user.birds + 1 : this.user.maxbirds;
                    exp.expedition.finished = true;
                    this.nbrExpeditions--;
                }
            }
        }, this);
    }

    getExpeditionName(id: number): string {
        return this.expeditionsInfo[id].name;
    }
    getRemainingTime(start: string, duration: number): number {
        const t = Math.floor((Number.parseInt(start) + duration - Date.now()) / 1000);
        return (t);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

}
