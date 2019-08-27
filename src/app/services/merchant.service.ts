import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Achievement } from '../interfaces/achievement';
import { User } from '../interfaces/user';
import userAchievements from '../interfaces/userAchievements';

@Injectable({
    providedIn: 'root'
})
export class MerchantService {
    constructor(private http: HttpClient) { }

    honorpointsToFeathers(): Promise<MerchantPageDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'merchant/htf',null, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: MerchantPageDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
    feathersToDroppings(): Promise<MerchantPageDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'merchant/ftd', null, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: MerchantPageDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
}

export interface MerchantPageDataAPIReturn {
    message: string;
    data:User
}