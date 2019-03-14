import { User } from './../../services/authentification.service';
import { PageDataService } from 'src/app/services/page-data.service';
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
    user: User;
    feathers: any;

    constructor(public aviaryService: AviaryService, public pageDataService: PageDataService) { }

    ngOnInit() {
        this.initPigeons();
    }

    async initPigeons() {
        const detailedPigeons: DetailedPigeon[] = [];
        const apiReturn: getPigeonsAPIReturn = await this.aviaryService.getPigeons();
        this.user = (await this.pageDataService.getHomePageData()).data;
        this.pageLoading = false;
        this.feathers = document.getElementById("feathers");


        const pigeons: Pigeon[] = apiReturn.data;

        for (const pigeon of pigeons) {
            const statisticsTotal = pigeon.defense + pigeon.shield + pigeon.attack;

            const detailedPigeon: DetailedPigeon = {
                statistics: {
                    defensePercentage: Math.round((pigeon.defense / statisticsTotal) * 100),
                    lifePercentage: Math.round((pigeon.shield / statisticsTotal) * 100),
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
        this.sellPigeonAnimation();
    }

    sellPigeonAnimation() {
        this.feathers.style.display = "block";
        const h = window.innerHeight;
        const w = window.innerWidth;
        for (let i = 0; i < 35; i++) {
            let x = document.createElement("IMG");
            x.setAttribute("src", "../../assets/img/feather.png");
            x.style.position = "absolute";
            x.style.zIndex = "101";
            x.style.top = (Math.random() * h * 1.4) - h * 0.2 + "px";
            x.style.left = (Math.random() * w * 1.4) - w * 0.2 + "px";
            x.style.height = (Math.random() * 100) + 50 + "px";
            x.style.width = (Math.random() * 100) + 50 + "px";
            x.style.transition = "all 0.5s ease-out";

            this.feathers.appendChild(x);

            setTimeout(function () {
                x.style.top = Math.random() * h + "px";
                x.style.left = Math.random() * w + "px";
            }, 10)
        }
        setTimeout(function () {
            this.feathers.innerHTML = '';
            this.feathers.style.display = "none";
        }, 500)
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