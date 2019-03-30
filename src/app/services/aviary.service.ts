import { HttpClient } from '@angular/common/http';
import { Pigeon } from './../interfaces/pigeon';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AviaryService {

    constructor(private http: HttpClient) { }

    getPigeons(orderBy:number): Promise<getPigeonsAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'pigeons?orderby='+orderBy, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: getPigeonsAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    deletePigeon(req: pigeonRequest) {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'pigeons/sell', req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: getPigeonsAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    feedPigeon(req: pigeonRequest) {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'pigeons/feed', req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: getPigeonsAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
    setAttacker(req: pigeonRequest) {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'pigeons/attacker', req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: getPigeonsAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
    setDefender(req: pigeonRequest) {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'pigeons/defender', req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: getPigeonsAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
}

export interface getPigeonsAPIReturn {
    message: string;
    data: Pigeon[];
}

export interface pigeonRequest {
    pigeonid: number
}