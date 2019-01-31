import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from './../../shared/services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthentificationService) { }

  ngOnInit() {
  }

  test(){
    console.log("test");
    this.authService.register("ee");

  }

}
