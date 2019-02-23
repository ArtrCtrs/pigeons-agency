import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { User } from 'src/app/interfaces/user';
import { PageDataService } from 'src/app/services/page-data.service';

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

        let pigeonIcon = L.icon({
            iconUrl: '/assets/marker/marker_pigeon.png'
        });

        let pigeon_marker = L.marker([5, 5], { icon: pigeonIcon }).addTo(this.pigeon_map);

        this.updateMapInfo()
        this.pageLoading = false;
    }

    async updateMapInfo() {
        let pigeonIcon = L.icon({
            iconUrl: '/assets/marker/marker_pigeon.png'
        });

        this.allusers = (await this.PageDataService.getLeaderboardData()).data;
        this.allusers.forEach(function (user) {
            console.log(user)
            L.marker([1.5, 5], { icon: pigeonIcon }).on('mouseover', this.onHover).addTo(this.pigeon_map);
        }, this);
    }

    onHover() {
        console.log("yee")
    }
}
