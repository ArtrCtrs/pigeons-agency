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
        this.user = (await this.pageDataService.getHomePageData()).data;
        let tmpNbrAttackers = 0;
        let tmpNbrDefenders = 0;
        let tmpTotalAttack = 0;
        let tmpTotalDefense = 0;
        const detailedPigeons: DetailedPigeon[] = [];
        const apiReturn: getPigeonsAPIReturn = await this.aviaryService.getPigeons(this.orderBy);
        this.pageLoading = false;


        const pigeons: Pigeon[] = apiReturn.data;

        for (const pigeon of pigeons) {
            let rae = "";
            switch (pigeon.rank) {
                case 1:
                    rae = "Common";
                    break;
                case 2:
                    rae = "Uncommon";
                    break;
                case 3:
                    rae = "Rare";
                    break;
                case 4:
                    rae = "Epic";
                    break;
                case 5:
                    rae = "Legendary";
                    break;
                case -1:
                    rae = "Event";
                    break;
            }

            const detailedPigeon: DetailedPigeon = {
                statistics: {
                    rankAsExpression: rae,
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
        this.totalAttack = tmpTotalAttack;
        this.totalDefense = tmpTotalDefense;
        this.nbrAttackers = tmpNbrAttackers;
        this.nbrDefenders = tmpNbrDefenders;
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
    // async feedPigeon(id: number) {
    //     await this.aviaryService.feedPigeon({
    //         pigeonid: id
    //     });
    //     await this.initPigeons();
    // }
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
        const h = window.innerHeight;
        const w = window.innerWidth;

        if (w > 650) {
            this.feathers.style.display = "block";
            for (let i = 0; i < 11; i++) {
                let x = document.createElement("IMG");
                x.setAttribute("src", "../../assets/img/feather.png");
                x.style.position = "absolute";
                x.style.zIndex = "101";
                x.style.top = (Math.random() * h * 1.4) - h * 0.2 + "px";
                x.style.left = (Math.random() * w * 1.4) - w * 0.2 + "px";
                x.style.height = (Math.random() * 100) + 50 + "px";
                x.style.width = (Math.random() * 100) + 50 + "px";
                x.style.transition = "all 0.42s ease-out";

                this.feathers.appendChild(x);

                setTimeout(function () {
                    x.style.top = Math.random() * h + "px";
                    x.style.left = Math.random() * w + "px";
                }, 10)
            }
            setTimeout(function () {
                this.feathers.innerHTML = '';
                this.feathers.style.display = "none";
            }, 375)
        }
    }

    async changeOrder(value) {
        this.orderBy = value;
        await this.initPigeons();
    }
    getPigeonImage(pigeon: Pigeon) {
        return this.aviaryService.getPigeonImage(pigeon);
    }
}

interface DetailedPigeon {
    statistics: {
        rankAsExpression: string;
    },
    pigeon: Pigeon
}