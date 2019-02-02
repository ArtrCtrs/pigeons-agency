import { AuthentificationService } from './../../shared/services/authentification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent {

    sendAttempt: boolean = false;
    loading: boolean = false;
    form: FormGroup;

    constructor(private formBuilder: FormBuilder,
        public authService: AuthentificationService,
        public router: Router) {
        this.form = formBuilder.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]]
        });
    }

    async register() {
        this.sendAttempt = true;

        if (this.form.valid) {
            this.loading = true;
            try {
                await this.authService.login({
                    username: this.form.get('username').value,
                    password: this.form.get('password').value
                });
                this.loading = false;
                this.router.navigate(['/home']);
            } catch (err) {
                this.loading = false;
                alert(err.error.message);
            }
        }
    }
}