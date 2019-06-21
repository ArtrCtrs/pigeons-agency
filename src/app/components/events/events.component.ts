import { EventResponse } from './../../interfaces/eventResponse';
import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.less']
})
export class EventsComponent implements OnInit {

  eventresponse: EventResponse;

  constructor(public eventService: EventsService) { }

  ngOnInit() {
    this.getEventInfo();
  }

  async getEventInfo() {
    this.eventresponse = (await this.eventService.getEventInfo()).data;
    console.log(this.eventresponse)
  }

  async doEventAction() {
    this.eventresponse = (await this.eventService.doEventAction()).data;
  }

}
