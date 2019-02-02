import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

    burgerActive: boolean = false;

    constructor(public router: Router) { }

    ngOnInit() {
    }

    toggleMobileMenu(open: boolean) {
        this.burgerActive = open;
    }

    redirect(destination: any) {
        this.toggleMobileMenu(false);
        this.router.navigate(destination);
    }
}
