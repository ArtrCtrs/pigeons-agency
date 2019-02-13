import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class PageDataService {

    constructor(private http: HttpClient) { }

    getHomePageData(): Promise<HomePageDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'user', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: HomePageDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
    getLeaderboardData(): Promise<LeaderboardDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'allusers', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: LeaderboardDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
}



export interface HomePageDataAPIReturn {
    message: string;
    data: User
}
export interface LeaderboardDataAPIReturn {
    message: string;
    data: User[]
}