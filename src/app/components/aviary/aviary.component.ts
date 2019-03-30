import { User } from './../../services/authentification.service';
import { PageDataService } from 'src/app/services/page-data.service';
import { AviaryService, getPigeonsAPIReturn } from './../../services/aviary.service';
import { Component, OnInit } from '@angular/core';
import { Pigeon } from 'src/app/interfaces/pigeon';
import { Router } from '@angular/router';

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
    nbrAttackers: number;
    nbrDefenders: number;
    totalAttack: number;
    totalDefense: number;
    feathers: any;
    sort: any;
    orderBy: number;

    constructor(public router: Router, public aviaryService: AviaryService, public pageDataService: PageDataService) { }

    ngOnInit() {
        this.orderBy = 1;

        this.nbrAttackers = 0;
        this.nbrDefenders = 0;
        this.totalAttack = 0;
        this.totalDefense = 0;
        this.feathers = document.getElementById("feathers");

        this.initPigeons();

    }

    async initPigeons() {
        let tmpNbrAttackers=0;
        let tmpNbrDefenders=0;
        let tmpTotalAttack=0;
        let tmpTotalDefense=0;
        const detailedPigeons: DetailedPigeon[] = [];
        const apiReturn: getPigeonsAPIReturn = await this.aviaryService.getPigeons(this.orderBy);
        this.user = (await this.pageDataService.getHomePageData()).data;
        this.pageLoading = false;


        const pigeons: Pigeon[] = apiReturn.data;

        for (const pigeon of pigeons) {
            //const statisticsTotal = pigeon.defense + pigeon.shield + pigeon.attack;

            const detailedPigeon: DetailedPigeon = {
                statistics: {
                    defensePercentage: 0,//Math.round((pigeon.defense / statisticsTotal) * 100),
                    lifePercentage: 0,//Math.round((pigeon.shield / statisticsTotal) * 100),
                    attackPercentage: 0,//Math.round((pigeon.attack / statisticsTotal) * 100),
                    totalPoints: 0,//statisticsTotal
                },
                pigeon: pigeon
            }
            if (pigeon.attacker) {
                tmpNbrAttackers++;
                tmpTotalAttack += pigeon.attack;
            }
            if (pigeon.defender) {
                tmpNbrDefenders++;
                tmpTotalDefense += pigeon.defense;
            }

            detailedPigeons.push(detailedPigeon);
        }

        this.detailedPigeons = detailedPigeons;
        this.totalAttack=tmpTotalAttack;
        this.totalDefense=tmpTotalDefense;
        this.nbrAttackers=tmpNbrAttackers;
        this.nbrDefenders=tmpNbrDefenders;
    }

    // selectPigeon(pigeon: Pigeon) {
    //     if (this.selectedPigeonId !== pigeon.id) {
    //         this.selectedPigeonId = pigeon.id;
    //     } else {
    //         this.selectedPigeonId = null;
    //     }
    // }

    getPigeonImage(pigeon: Pigeon) {
        let imgName = "";
        switch (pigeon.type) {
            case 1:
                imgName = "little_common"
                break;
            case 2:
                imgName = "little_uncommon";
                break;
            case 3:
                imgName = "little_rare";
                break;
            case 4:
                imgName = "little_epic";
                break;
            case 5:
                imgName = "little_legendary";
                break;
            case 6:
                imgName = "fat_common";
                break;
            case 7:
                imgName = "fat_uncommon";
                break;
            case 8:
                imgName = "fat_rare";
                break;
            case 9:
                imgName = "fat_epic";
                break;
            case 10:
                imgName = "fat_legendary";
                break;
            case 11:
                imgName = "sneak_common";
                break;
            case 12:
                imgName = "sneak_uncommon";
                break;
            case 13:
                imgName = "sneak_rare";
                break;
            case 14:
                imgName = "sneak_epic";
                break;
            case 15:
                imgName = "sneak_legendary";
                break;
            case 16:
                imgName = "h_pigeon";
                break;
            case 21:
                imgName = "king_common";
                break;
            case 22:
                imgName = "king_uncommon";
                break;
            case 23:
                imgName = "king_rare";
                break;
            case 24:
                imgName = "king_epic";
                break;
            case 25:
                imgName = "king_legendary";
                break;
            case 26:
                imgName = "assassin_common";
                break;
            case 27:
                imgName = "assassin_uncommon";
                break;
            case 28:
                imgName = "assassin_rare";
                break;
            case 29:
                imgName = "assassin_epic";
                break;
            case 30:
                imgName = "assassin_legendary";
                break;
            default:
                imgName = "dummy";
        }
        return '../../assets/pigeons/' + imgName + '.png';
    }
    redirect(destination: any) {
        this.router.navigate(destination);
    }

    async deletePigeon(id: number) {
        await this.aviaryService.deletePigeon({
            pigeonid: id
        });
        await this.initPigeons();
        this.sellPigeonAnimation();
    }
    async feedPigeon(id: number) {
        await this.aviaryService.feedPigeon({
            pigeonid: id
        });
        await this.initPigeons();
    }
    async setAttacker(id: number) {
        await this.aviaryService.setAttacker({
            pigeonid: id
        });
        await this.initPigeons();
    }
    async setDefender(id: number) {
        await this.aviaryService.setDefender({
            pigeonid: id
        });
        await this.initPigeons();
    }

    sellPigeonAnimation() {
        this.feathers.style.display = "block";
        const h = window.innerHeight;
        const w = window.innerWidth;
        for (let i = 0; i < 15; i++) {
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


    async changeOrder(value) {
        this.orderBy = value;
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