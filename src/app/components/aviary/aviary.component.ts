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

        console.log(pigeons);

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
        let imgName = "";
        switch (pigeon.type) {
            case 0:
                imgName = "little_common"
                break;
            case 1:
                imgName = "little_uncommon";
                break;
            case 2:
                imgName = "little_rare";
                break;
            case 3:
                imgName = "little_epic";
                break;
            case 4:
                imgName = "little_legendary";
                break;
            case 5:
                imgName = "fat_common";
                break;
            case 6:
                imgName = "fat_uncommon";
                break;
            case 7:
                imgName = "fat_rare";
                break;
            case 8:
                imgName = "fat_epic";
                break;
            case 9:
                imgName = "fat_legendary";
                break;
            default:
                imgName = "commun";
        }
        return '../../assets/pigeons/' + imgName + '.png';
    }

    async deletePigeon(id: number) {
        await this.aviaryService.deletePigeon({
            pigeonid: id
        });
        await this.initPigeons();
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