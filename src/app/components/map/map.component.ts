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
        console.log(this.pigeon_map);

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
            "<bold>" + user.username + "</bold>"+
            "<p>Military score : " + user.militaryscore + "</p>"+
            "<p>Spent seeds : " + user.totalspentseeds + "</p>"+
            "<p>Spent droppings : " + user.totalspentdroppings + "</p>"+
            "<p>Spent feathers : " + user.totalspentfeathers + "</p>"+
            "<p>" + user.birds+"/"+user.maxbirds + " birds</p>"+
            "<p>" + user.seedsminute + " seeds/minute</p>"+
            "<p>" + user.totaldroppingsminute + " droppings/minute</p>"+
            "<p>Number of attacks : " + user.totalattacks + "</p>"+
            "<p>Number of defenses : " + user.totaldefenses + "</p>";

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
