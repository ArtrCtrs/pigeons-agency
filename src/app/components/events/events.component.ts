import { EventResponse } from './../../interfaces/eventResponse';
import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Eventuser } from 'src/app/interfaces/eventuser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.less']
})
export class EventsComponent implements OnInit {

  eventresponse: EventResponse;
  mainuser: Eventuser;
  now: number;
  page: number;

  constructor(public eventService: EventsService) { }

  ngOnInit() {
    this.page = 1;
    this.getEventInfo();
  }

  async getEventInfo() {
    this.eventresponse = (await this.eventService.getEventInfo()).data;
    this.now = Date.now();
    this.mainuser = this.eventresponse.users.filter(x => x.userid == this.eventresponse.userid)[0];
    if (!this.mainuser) {
      this.mainuser = {
        id: -1,
        userid: null,
        lastactiontime: null,
        nextactiontime: 0,
        stat1: null,
        stat2: null,
        honorpoints: null,
        username: null,
        lvl: null,
        totaldroppingsminute: null,
        birds: null,
        newHonorPoints:null,
        eventparticipation:null
      }
    }
    this.eventresponse.users.sort((a, b) => b.stat1 - a.stat1);
  }

  async doEventAction() {
    this.eventresponse = (await this.eventService.doEventAction({
      droppingsM: this.mainuser.totaldroppingsminute
    })).data;
    this.now = Date.now();
    this.mainuser = this.eventresponse.users.filter(x => x.userid == this.eventresponse.userid)[0];
    this.eventresponse.users.sort((a, b) => b.stat1 - a.stat1);
  }

}
