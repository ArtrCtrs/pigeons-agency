import { Component, OnInit } from '@angular/core';
import expeditionsList from '../../shared/lists/expeditionsList';
import { ExpeditionsService } from 'src/app/shared/services/expeditions.service';
import { Expedition } from 'src/app/shared/interfaces/public-expedition';


@Component({
  selector: 'app-expeditions',
  templateUrl: './expeditions.component.html',
  styleUrls: ['./expeditions.component.less']
})
export class ExpeditionsComponent implements OnInit {
  filteredExpeditions: Expedition[] = [];
  expeditions: Expedition[] = [];

  constructor() { }

  ngOnInit() {
    this.expeditions = expeditionsList;
    this.filteredExpeditions = this.expeditions;

    
  console.log(this.filteredExpeditions)
  }

}
