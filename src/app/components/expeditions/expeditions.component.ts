import { Component, OnInit } from '@angular/core';
import expeditionsList from '../../lists/expeditionsList';
import { ExpeditionsService } from 'src/app/services/expeditions.service';
import { ExpeditionInfo } from 'src/app/interfaces/expedition-info';
import { ExpeditionPageDataAPIReturn } from 'src/app/services/expeditions.service';


@Component({
  selector: 'app-expeditions',
  templateUrl: './expeditions.component.html',
  styleUrls: ['./expeditions.component.less']
})
export class ExpeditionsComponent implements OnInit {
  filteredExpeditionsInfo: ExpeditionInfo[] = [];
  expeditionsInfo: ExpeditionInfo[] = [];
  myExpeditions:ExpeditionPageDataAPIReturn;

  constructor(public expeditionsService: ExpeditionsService) { }

  ngOnInit() {
    this.expeditionsInfo = expeditionsList;
    this.filteredExpeditionsInfo = this.expeditionsInfo;
  }

  async getExpeditionsData() {
    this.myExpeditions = await this.expeditionsService.getExpeditionsData();
    console.log(this.myExpeditions)

}

}
