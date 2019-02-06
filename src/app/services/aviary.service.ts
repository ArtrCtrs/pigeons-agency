import { HttpClient } from '@angular/common/http';
import { Pigeon } from './../interfaces/pigeon';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AviaryService {

    constructor(private http: HttpClient) { }

    getPigeons(): Promise<getPigeonsAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'pigeons', {
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

    deletePigeon(req: deletePigeonRequest) {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'pigeons', req, {
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

export interface deletePigeonRequest {
    pigeonid: number
}