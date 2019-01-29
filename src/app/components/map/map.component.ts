import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

    private drawnItems: L.FeatureGroup;

    constructor() { }

    ngOnInit() {
        const pigeon_map = L.map('pigeon_map').setView([5, 5], 4);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            minZoom: 3,
            maxZoom: 6,
            attribution: 'Carte des pigeons'
        }).addTo(pigeon_map);

        let pigeonIcon = L.icon({
            iconUrl: '/assets/marker/marker_pigeon.png'
        });

        let pigeon_marker = L.marker([5, 5], { icon: pigeonIcon }).addTo(pigeon_map);
    }
}
