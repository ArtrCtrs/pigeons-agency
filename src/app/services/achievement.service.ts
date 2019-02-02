import { Injectable } from '@angular/core';
import { Achievement } from '../interfaces/achievement';

@Injectable({
    providedIn: 'root'
})
export class AchievementsService {

    getAchievements(): Promise<Achievement[]> {
        return new Promise(resolve => {
            resolve([{
                id: 1,
                name: 'Premiers pas',
                difficulty: 'Facile',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: true
            },
            {
                id: 2,
                name: 'Nouveaux arrivants',
                difficulty: 'Facile',
                description: 'Votre pigeonnier s\'agrandit, il va falloir produire plus de graines.',
                requirements: 'Produisez 20 graines.',
                completed: false
            },
            {
                id: 3,
                name: 'Premiers pas',
                difficulty: 'Facile',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: false
            },
            {
                id: 4,
                name: 'Premiers pas',
                difficulty: 'Moyen',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: false
            },
            {
                id: 5,
                name: 'Premiers pas',
                difficulty: 'Moyen',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: false
            },
            {
                id: 6,
                name: 'Premiers pas',
                difficulty: 'Difficile',
                description: 'Vos pigeons sont affamés ! Occupez-vous de les nourrir.',
                requirements: 'Produisez 5 graines.',
                completed: false
            }])
        })
    }
}
