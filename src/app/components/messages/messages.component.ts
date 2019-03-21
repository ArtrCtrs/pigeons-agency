import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { MessageService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  pageLoading = true;

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.getMessagesData();
  }

  async getMessagesData() {
    this.messages = (await this.messageService.getMessages()).data;
    this.pageLoading = false;
    console.log(this.messages)
  }

  timestampToString(time:number){
    let date = new Date(time/1000);
    return date.toString();

  }

}
