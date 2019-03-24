import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../interfaces/message';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(private http: HttpClient) { }

    getMessages(): Promise<MessagesAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.get(environment.apiBaseUrl + 'messages', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: MessagesAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }
    sendMessage(req:MessageRequest): Promise<MessagesAPIReturn> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.apiBaseUrl + 'messages',req, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .subscribe((res: MessagesAPIReturn) => {
                    resolve(res);
                }, err => {
                    reject(err);
                });
        });
    }

}
export interface MessagesAPIReturn {
    message: string;
    data: Message[];
}
export interface MessageRequest{
    message:string
}