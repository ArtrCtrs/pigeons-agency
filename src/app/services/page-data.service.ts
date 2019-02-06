import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
}

export interface HomePageDataAPIReturn {
    message: string;
    data: {
        id: number;
        username: string;
        password: string;
        lvl: number;
        birds:number;
        maxbirds: number;
        seeds: number;
        seedsminute: number;
        droppings: number;
        totaldropingsminute: number;
        feathers: number;
        xcoord: number;
        ycoord: number;
        lastupdate: number;
    }
}