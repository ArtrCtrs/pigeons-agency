import { AuthentificationService } from './../../services/authentification.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.less']
})
export class RegisterComponent {

    sendAttempt: boolean = false;
    loading: boolean = false;
    form: FormGroup;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthentificationService,
        public router: Router) {
        this.form = formBuilder.group({
            username: [null, [Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
            password: [null, [Validators.required]]
        });
    }

    async register() {
        this.sendAttempt = true;

        if (this.form.valid) {
            this.loading = true;
            try {
                await this.authService.register({
                    username: this.form.get('username').value,
                    password: this.form.get('password').value
                });
                this.loading = false;
                alert('Votre compte a été créé avec succès !');
                this.router.navigate(['/login']);
            } catch (err) {
                this.loading = false;
                alert(err.error.message);
            }
        }
    }
}
