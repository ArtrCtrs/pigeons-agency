import { Event } from './event';
import { Eventuser } from './eventuser';
export interface EventResponse {
    event: Event;
    users: Eventuser[];
    userid:number;
}