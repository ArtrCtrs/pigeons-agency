import { Pigeon } from './../interfaces/pigeon';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AviaryService {

    getPigeons(): Promise<Pigeon[]> {
        return new Promise(resolve => {
            resolve([{
                id: 1,
                rarity: 'commun',
                level: 3,
                defense: 0,
                life: 2,
                attack: 1
            },
            {
                id: 2,
                rarity: 'commun',
                level: 9,
                defense: 1,
                life: 3,
                attack: 5
            },
            {
                id: 3,
                rarity: 'atypique',
                level: 2,
                defense: 4,
                life: 5,
                attack: 9
            },
            {
                id: 4,
                rarity: 'rare',
                level: 9,
                defense: 8,
                life: 4,
                attack: 6
            },
            {
                id: 5,
                rarity: 'rare',
                level: 4,
                defense: 3,
                life: 6,
                attack: 3
            },
            {
                id: 6,
                rarity: 'exotique',
                level: 3,
                defense: 4,
                life: 4,
                attack: 4
            },
            {
                id: 7,
                rarity: 'exotique',
                level: 3,
                defense: 4,
                life: 4,
                attack: 4
            },
            {
                id: 8,
                rarity: 'legendaire',
                level: 4,
                defense: 12,
                life: 18,
                attack: 10
            }])
        })
    }
}
