import L from 'leaflet';
import Tangram from 'tangram';
import leafletHash from 'leaflet-hash';

const map = L.map('map');

const layer = Tangram
    .leafletLayer({
        // scene: 'scene.yaml', // simple demo scene
        scene: {
            import: [
                'https://www.nextzen.org/carto/bubble-wrap-style/10/bubble-wrap-style.zip',
                'https://www.nextzen.org/carto/bubble-wrap-style/10/themes/label-10.zip',
                'https://www.nextzen.org/carto/bubble-wrap-style/10/themes/bubble-wrap-road-shields-usa.zip',
                'https://www.nextzen.org/carto/bubble-wrap-style/10/themes/bubble-wrap-road-shields-international.zip'
            ],
            global: {
                sdk_api_key: 'NaqqS33fTUmyQcvbuIUCKA'
            }
        },
        attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
    })
    .addTo(map);

// Set starting location
// Try to get location from URL, with leaflet-style hash pattern: #[zoom],[lat],[lng]
let startLocation = [[40.70531887544228, -74.00976419448853], 15]; // default location, NYC
const urlHash = window.location.hash.slice(1, window.location.hash.length).split('/').map(Number);
if (urlHash.length == 3) {
    startLocation = [[urlHash[1], urlHash[2]], urlHash[0]];
}

map.setView(startLocation[0], startLocation[1]); // setView expects format ([lat, long], zoom)

// update hash on navigation - uses leaflet-hash.js
const hash = new L.Hash(map);
