/*jslint browser: true*/
/*global Tangram, gui */
import L from 'leaflet';
import Tangram from 'tangram';
import leafletHash from './leaflet-hash.js';

var map = (function () {
    'use strict';

    var map_start_location = [40.70531887544228, -74.00976419448853, 15]; // NYC

    /*** URL parsing ***/

    // leaflet-style URL hash pattern:
    // #[zoom],[lat],[lng]
    var url_hash = window.location.hash.slice(1, window.location.hash.length).split('/');

    if (url_hash.length == 3) {
        map_start_location = [url_hash[1],url_hash[2], url_hash[0]];
        // convert from strings
        map_start_location = map_start_location.map(Number);
    }

    /*** Map ***/

    var map = L.map('map');

    var layer = Tangram.leafletLayer({
        scene: 'scene.yaml',
        attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
    });

    window.layer = layer;
    var scene = layer.scene;
    window.scene = scene;

    // update hash on navigation - uses leaflet-hash.js
    var hash = new L.Hash(map);

    // setView expects format ([lat, long], zoom)
    map.setView(map_start_location.slice(0, 3), map_start_location[2]);

    /***** Render loop *****/

    window.addEventListener('load', function () {
        // Scene initialized
        window.layer.on('init', function() {
            // MPZN.bug();
        });
        window.layer.addTo(map);
    });

    return map;

}());
