import { AuthentificationService, User } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

    username: string;
    burgerActive: boolean = false;

    constructor(public router: Router,
        private AuthentificationService: AuthentificationService) { }

    ngOnInit() {
        const user: User = this.AuthentificationService.user;
        this.username = user ? user.username : null;

        this.AuthentificationService.bus.subscribe(() => {
            const user: User = this.AuthentificationService.user;
            this.username = user ? user.username : null;
        });
    }

    toggleMobileMenu(open: boolean) {
        this.burgerActive = open;
    }

    redirect(destination: any) {
        this.toggleMobileMenu(false);
        this.router.navigate(destination);
    }

    logout() {
        this.AuthentificationService.logout();
        this.router.navigate(['/login']);
    }
}
