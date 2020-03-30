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
let InfoBoxComponent = class InfoBoxComponent {
    constructor() {
        this.lineChartData = [
            { data: [12, 19, 3, 5, 2, 3], label: 'Balance $' }
        ];
        this.lineChartLabels = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017'
        ];
        this.lineChartOptions = {
            responsive: true,
            elements: {
                point: {
                    radius: 2
                }
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                ]
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'transparent',
                borderColor: '#bbb790',
                pointBackgroundColor: '#bbb790',
                pointBorderColor: '#bbb790',
                pointHoverBackgroundColor: '#bbb790',
                pointHoverBorderColor: '#bbb790'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // bar chart
        this.barChartData = [
            { data: [1.1, 1.4, 1.1, 0.9, 1.5, 1, 0.3], label: 'Cost' }
        ];
        this.barChartLabels = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7'
        ];
        this.barChartOptions = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.3,
                        categoryPercentage: 0.7
                    }],
                yAxes: [{
                        display: false
                    }]
            }
        };
        this.barChartColors = [
            {
                backgroundColor: '#16baf0',
                hoverBackgroundColor: '#16baf0',
                hoverBorderWidth: 4,
                hoverBorderColor: '#16baf0'
            }
        ];
        this.barChartLegend = false;
        this.barChartType = 'bar';
    }
    ngAfterViewInit() {
        const chart = c3.generate({
            bindto: '#foo',
            data: {
                columns: [['data', 91.4]],
                type: 'gauge'
            },
            gauge: {
                label: {
                    format: function (value, ratio) {
                        return value;
                    },
                    show: false
                },
                min: 0,
                max: 100,
                units: ' %',
                width: 15
            },
            legend: {
                hide: true
            },
            size: {
                height: 80
            },
            color: {
                pattern: ['#24d2b5']
            }
        });
    }
};
InfoBoxComponent = __decorate([
    Component({
        selector: 'app-info-box',
        templateUrl: './info-box.component.html',
        styleUrls: ['./info-box.component.css']
    }),
    __metadata("design:paramtypes", [])
], InfoBoxComponent);
export { InfoBoxComponent };
//# sourceMappingURL=info-box.component.js.map