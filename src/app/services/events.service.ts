import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EventResponse } from '../interfaces/eventResponse';

@Injectable({
    providedIn: 'root'
})

export class EventsService {

    constructor(private http: HttpClient) { }

    getEventInfo(): Promise<EventDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'event', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: EventDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

    doEventAction(req: eventRequest):Promise<EventDataAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'event',req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: EventDataAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }


}
export interface EventDataAPIReturn {
    message: string;
    data: EventResponse
}
export interface eventRequest {
    droppingsM: number
}

