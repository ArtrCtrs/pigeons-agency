import { MessageService } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.less']
})
export class HelpComponent implements OnInit {
  form: FormGroup;

  constructor(public messageService: MessageService,private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
        message: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  async sendMessage(){
    //event.preventDefault();
    await this.messageService.sendMessage(this.form.get('message').value);

  }


}
