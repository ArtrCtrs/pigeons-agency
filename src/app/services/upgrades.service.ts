import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import Expedition from '../interfaces/expedition';


@Injectable({
    providedIn: 'root'
})
export class UpgradesService {
    constructor(private http: HttpClient) { }

    getCurrentUpgrades(): Promise<UpgradesPageDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'upgrades', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: UpgradesPageDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    upgradeFarm() {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'upgrades/farm',null, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            })
                .subscribe((res: UpgradesPageDataAPIReturn) => {
                    console.log("res")
                    resolve(res);
                }, err => {
                    console.log("rrec")
                    reject(err);
                });
        });
    }
    upgradeAviary() {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'upgrades/aviary',null, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            })
                .subscribe((res: UpgradesPageDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
}



export interface UpgradesPageDataAPIReturn {
    message: string;
    data: {
        farmlvl: number,
        aviarylvl: number
    }
}