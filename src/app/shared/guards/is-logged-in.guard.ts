import { AuthentificationService } from './../services/authentification.service';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {

    constructor(public router: Router, private AuthentificationService: AuthentificationService) { }

    canActivate(): boolean {
        const isLoggedIn = this.AuthentificationService.checkIfLoggedIn();

        if (!isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}