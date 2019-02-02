import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {

    token: string;
    user: User;

    constructor(private http: HttpClient) { }

    login(APIParameter: LoginAPIParameter): Promise<LoginAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'login', APIParameter)
                .subscribe((res: LoginAPIReturn) => {
                    this.updateToken(res.data.token);
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    register(APIParameter: RegisterAPIParameter): Promise<RegisterAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'register', APIParameter)
                .subscribe((res: RegisterAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    updateToken(token: string) {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        this.user = decodedToken.user;
    }

    isLoggedIn(): boolean {

        if (this.token) {
            const helper = new JwtHelperService();
            return helper.isTokenExpired(this.token);
        }

        return false;
    }

    logout() {
        this.token = null;
        this.user = null;
    }
}

export interface LoginAPIParameter {
    username: string;
    password: string;
}

export interface LoginAPIReturn {
    message: string;
    data: {
        token: string
    }
}

export interface RegisterAPIParameter {
    username: string;
    password: string;
}

export interface RegisterAPIReturn {
    message: string;
    data: any;
}

export interface User {
    id: number;
    username: string;
}