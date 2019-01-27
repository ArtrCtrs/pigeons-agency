import { QuestsService } from './../../shared/services/quests.service';
import { Component, OnInit } from '@angular/core';
import { Quest } from 'src/app/shared/interfaces/quest';

@Component({
    selector: 'app-quests',
    templateUrl: './quests.component.html',
    styleUrls: ['./quests.component.less']
})
export class QuestsComponent implements OnInit {

    filteredQuests: Quest[] = [];
    quests: Quest[] = [];

    constructor(public QuestsService: QuestsService) { }

    ngOnInit() {
        this.initQuests();
    }

    async initQuests() {
        this.quests = await this.QuestsService.getQuests();
        this.filteredQuests = this.quests;
    }

    filterQuests(query: string) {
        this.filteredQuests = this.quests.filter(value => value.name.toLowerCase().includes(query));
    }
}