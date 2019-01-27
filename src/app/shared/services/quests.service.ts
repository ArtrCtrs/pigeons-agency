import { Injectable } from '@angular/core';
import { Quest } from '../interfaces/quest';

@Injectable({
    providedIn: 'root'
})
export class QuestsService {

    getQuests(): Promise<Quest[]> {
        return new Promise(resolve => {
            resolve([{
                name: 'Premiers pas',
                difficulty: 'Facile',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: true
            },
            {
                name: 'Nouveaux arrivants',
                difficulty: 'Facile',
                description: 'Votre pigeonnier s\'agrandit, il va falloir produire plus de graines.',
                requirements: 'Produisez 20 graines.',
                completed: false
            },
            {
                name: 'Premiers pas',
                difficulty: 'Facile',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: false
            },
            {
                name: 'Premiers pas',
                difficulty: 'Moyen',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: false
            },
            {
                name: 'Premiers pas',
                difficulty: 'Moyen',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: false
            },
            {
                name: 'Premiers pas',
                difficulty: 'Difficile',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: false
            }])
        })
    }
}
