import { AviaryService, getPigeonsAPIReturn } from './../../services/aviary.service';
import { Component, OnInit } from '@angular/core';
import { Pigeon } from 'src/app/interfaces/pigeon';

@Component({
    selector: 'app-aviary',
    templateUrl: './aviary.component.html',
    styleUrls: ['./aviary.component.less']
})
export class AviaryComponent implements OnInit {

    pageLoading: boolean = true;
    detailedPigeons: DetailedPigeon[] = [];
    selectedPigeonId: number;

    constructor(public aviaryService: AviaryService) { }

    ngOnInit() {
        this.initPigeons();
    }

    async initPigeons() {
        const detailedPigeons: DetailedPigeon[] = [];
        const apiReturn: getPigeonsAPIReturn = await this.aviaryService.getPigeons();
        this.pageLoading = false;

        const pigeons: Pigeon[] = apiReturn.data;

        for (const pigeon of pigeons) {
            const statisticsTotal = pigeon.defense + pigeon.life + pigeon.attack;

            const detailedPigeon: DetailedPigeon = {
                statistics: {
                    defensePercentage: Math.round((pigeon.defense / statisticsTotal) * 100),
                    lifePercentage: Math.round((pigeon.life / statisticsTotal) * 100),
                    attackPercentage: Math.round((pigeon.attack / statisticsTotal) * 100),
                    totalPoints: statisticsTotal
                },
                pigeon: pigeon
            }

            detailedPigeons.push(detailedPigeon);
        }

        this.detailedPigeons = detailedPigeons;
    }

    selectPigeon(pigeon: Pigeon) {
        if (this.selectedPigeonId !== pigeon.id) {
            this.selectedPigeonId = pigeon.id;
        } else {
            this.selectedPigeonId = null;
        }
    }

    getPigeonImage(pigeon: Pigeon) {
        return '../../assets/pigeons/' + 'commun' + '.png'; // FIXME utiliser la rareté venant du back-end
    }
}

interface DetailedPigeon {
    statistics: {
        defensePercentage: number;
        lifePercentage: number;
        attackPercentage: number;
        totalPoints: number;
    },
    pigeon: Pigeon
}