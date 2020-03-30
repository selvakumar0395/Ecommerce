var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
let MapgoogleComponent = class MapgoogleComponent {
    constructor() {
        this.lat = -34.397;
        this.lng = 150.644;
        this.latA = -34.754764;
        this.lngA = 149.736246;
        this.zoom = 8;
        this.styles = [
            {
                featureType: 'all',
                stylers: [
                    {
                        saturation: -80
                    }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    {
                        hue: '#00ffee'
                    },
                    {
                        saturation: 50
                    }
                ]
            },
            {
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [
                    {
                        visibility: 'off'
                    }
                ]
            }
        ];
    }
};
__decorate([
    ViewChild('map1', { static: true }),
    __metadata("design:type", Object)
], MapgoogleComponent.prototype, "map1", void 0);
__decorate([
    ViewChild('map2', { static: true }),
    __metadata("design:type", Object)
], MapgoogleComponent.prototype, "map2", void 0);
__decorate([
    ViewChild('map3', { static: true }),
    __metadata("design:type", Object)
], MapgoogleComponent.prototype, "map3", void 0);
__decorate([
    ViewChild('map4', { static: true }),
    __metadata("design:type", Object)
], MapgoogleComponent.prototype, "map4", void 0);
MapgoogleComponent = __decorate([
    Component({
        selector: 'app-map-google',
        templateUrl: './map-google.component.html',
        styleUrls: ['./map-google.component.scss']
    }),
    __metadata("design:paramtypes", [])
], MapgoogleComponent);
export { MapgoogleComponent };
//# sourceMappingURL=map-google.component.js.map