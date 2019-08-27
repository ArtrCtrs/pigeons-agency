import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { User } from 'src/app/interfaces/user';
import { PageDataService } from 'src/app/services/page-data.service';
import { TestBed } from '@angular/core/testing';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
    pageLoading: boolean = true;
    allusers: User[];
    pigeon_map: any;

    private drawnItems: L.FeatureGroup;

    constructor(private PageDataService: PageDataService) { }

    ngOnInit() {
        this.pigeon_map = L.map('pigeon_map').setView([5, 5], 4);
        //console.log(this.pigeon_map);

        L.tileLayer('/assets/tiles/{z}/{x}/{y}.png', {
            minZoom: 4,
            maxZoom: 4,
            attribution: 'Players Map'
        }).addTo(this.pigeon_map);

        // let pigeonIcon = L.icon({
        //     iconUrl: '/assets/marker/marker_pigeon.png'
        // });

        // let pigeon_marker = L.marker([5, 5], { icon: pigeonIcon }).addTo(this.pigeon_map);

        this.updateMapInfo()
        this.pageLoading = false;
    }

    async updateMapInfo() {

        this.allusers = (await this.PageDataService.getLeaderboardData()).data;
        this.allusers.forEach(function (user) {
            let popup: string =
                "<b>" + user.username + " lvl " + user.lvl + "</b><br>" +
                "Military score : " + user.militaryscore + "<br>" +
                "Spent seeds : " + user.totalspentseeds + "<br>" +
                "Spent droppings : " + user.totalspentdroppings + "<br>" +
                "Spent feathers : " + user.totalspentfeathers + "<br>" +
                "" + user.birds + "/" + user.maxbirds + " birds<br>" +
                "" + user.seedsminute + " seeds/minute</br>" +
                "" + user.totaldroppingsminute + " droppings/minute<br>" +
                user.totalwinattacks + " successful attacks / " + user.totalattacks + " total atks<br>" +
                user.totalwindefenses + " successful defenses / " + user.totaldefenses + " total defs<br>"
                ;

            L.marker([user.xcoord, user.ycoord], {
                icon: L.icon({
                    iconUrl: '/assets/marker/' + user.icon,
                    iconSize: [38, 38]
                })
            })
                .addTo(this.pigeon_map)
                .bindPopup(popup)
        }, this);
    }

    tewt() {
        alert('1');
    }
}
