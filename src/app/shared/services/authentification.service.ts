import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationService {
    constructor(private http: HttpClient) { }

    login(APIParameter: LoginAPIParameter): Promise<LoginAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'login', APIParameter)
                .subscribe((res: LoginAPIReturn) => {
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