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
let SalesComponent = class SalesComponent {
    constructor() {
        // Barchart
        this.barChart = {
            type: 'Bar',
            data: {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                series: [[50, 40, 30, 70, 50, 20, 30]]
            },
            options: {
                chartPadding: {
                    top: 15,
                    left: -25
                },
                axisX: {
                    showLabel: true,
                    showGrid: false
                },
                axisY: {
                    showLabel: false,
                    showGrid: false
                },
                fullWidth: true
            }
        };
        // Line chart
        this.lineChart = {
            type: 'Line',
            data: {
                labels: ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
                series: [[2, 0, 5, 2, 5, 2]]
            },
            options: {
                showArea: true,
                showPoint: false,
                chartPadding: {
                    left: -35
                },
                axisX: {
                    showLabel: true,
                    showGrid: false
                },
                axisY: {
                    showLabel: false,
                    showGrid: true
                },
                fullWidth: true
            }
        };
    }
    ngAfterViewInit() {
        const chart2 = c3.generate({
            bindto: '#product-sales',
            data: {
                columns: [
                    ['Iphone', 5, 6, 3, 7, 9, 10, 14, 12, 11, 9, 8, 7, 10, 6, 12, 10, 8],
                    ['Ipad', 1, 2, 8, 3, 4, 5, 7, 6, 5, 6, 4, 3, 3, 12, 5, 6, 3]
                ],
                type: 'spline'
            },
            axis: {
                y: {
                    show: true,
                    tick: {
                        count: 0,
                        outer: false
                    }
                },
                x: {
                    show: true
                }
            },
            padding: {
                top: 40,
                right: 10,
                bottom: 40,
                left: 20
            },
            point: {
                r: 0
            },
            legend: {
                hide: false
            },
            color: {
                pattern: ['#ccc', '#4798e8']
            }
        });
    }
};
SalesComponent = __decorate([
    Component({
        selector: 'app-sales',
        templateUrl: './sales.component.html',
        styleUrls: ['./sales.component.scss']
    }),
    __metadata("design:paramtypes", [])
], SalesComponent);
export { SalesComponent };
//# sourceMappingURL=sales.component.js.map