import * as L from "leaflet";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { ScriptService } from './script-service.class';

//declare var L: any;

export class CustomMapsClass {

    private scriptLoader: ScriptService;
    constructor() {
        
    }

    public loadMapScript() {
        console.log("this function is called");
        const accessToken = 'pk.eyJ1IjoiYXJ0c3lzdHVmZnMiLCJhIjoiY2s0Nnp5cHpoMHBwbTNlbm5wdnZ4andqbSJ9.romxY_tSB__-YhXSKG9fGw';
        const map = L.map('map').setView([38.97416, -95.23252], 6);
        L.tileLayer(
            'https://api.mapbox.com/styles/v1/artsystuffs/ck470du0u3fw21cohmk4lvfu2/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
                tileSize: 512,
                zoomOffset: -1,
                attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

    }

    public updateMapLocation(locationName: string) {
        console.log("from location", locationName);
    }

}



