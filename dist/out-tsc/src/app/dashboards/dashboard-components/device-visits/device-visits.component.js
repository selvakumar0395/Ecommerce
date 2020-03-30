var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import * as c3 from 'c3';
let DeviceVisitsComponent = class DeviceVisitsComponent {
    constructor() { }
    ngAfterViewInit() {
        const chart = c3.generate({
            bindto: '#visitor',
            data: {
                columns: [['Desktop', 60], ['Tablet', 12], ['Mobile', 28]],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Visits',
                width: 25
            },
            legend: {
                hide: true
                // or hide: 'data1'
                // or hide: ['data1', 'data2']
            },
            color: {
                pattern: ['#4798e8', '#ff7676', '#f6f6f6']
            }
        });
    }
};
DeviceVisitsComponent = __decorate([
    Component({
        selector: 'app-device-visits',
        templateUrl: './device-visits.component.html'
    }),
    __metadata("design:paramtypes", [])
], DeviceVisitsComponent);
export { DeviceVisitsComponent };
//# sourceMappingURL=device-visits.component.js.map