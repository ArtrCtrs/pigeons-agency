import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import Expedition from '../interfaces/expedition';


@Injectable({
    providedIn: 'root'
})
export class ExpeditionsService {
    constructor(private http: HttpClient) { }

    getExpeditionsData(): Promise<ExpeditionPageDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'expeditions', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: ExpeditionPageDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

//todo
    launchExpedition() {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'expeditions', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: ExpeditionPageDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
}



export interface ExpeditionPageDataAPIReturn {
    message: string;
    data: Expedition[]
}