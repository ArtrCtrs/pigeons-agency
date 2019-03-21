import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
    providedIn: 'root'
})

export class AttackService {

    constructor(private http: HttpClient) { }

    getAttackboardData(): Promise<AttackDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'allusers', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: AttackDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    attackPlayer(req: attackRequest) {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'attack', req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: attackRequest) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }


}

export interface AttackDataAPIReturn {
    message: string;
    data: User[]
}

export interface attackRequest {
    userid: number
}
