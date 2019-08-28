import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'minuteSeconds'
})

export class MinuteSecondsPipe implements PipeTransform {

    transform(value: number): string {
        const minutes: number = Math.floor(value / 60);
        const minutesAsString: string = minutes < 10 ? "0" + minutes : "" + minutes;
        const seconds: number = Math.round(value - minutes * 60);
        const secondsAsSting: string = seconds < 10 ? "0" + seconds : "" + seconds;
        return minutesAsString + ':' + secondsAsSting;
    }

}