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
let MixstatsComponent = class MixstatsComponent {
    constructor() {
        // bar chart
        this.barChartData = [
            { data: [1.1, 1.4, 1.1, 0.9, 1.9, 1, 0.3, 1.1, 1.4, 1.1, 0.9, 1.9, 1, 0.3, 1.1], label: 'Cost' }
        ];
        this.barChartLabels = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15'
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
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                hoverBackgroundColor: 'rgba(255, 255, 255, 0.5)',
                hoverBorderWidth: 2,
                hoverBorderColor: 'rgba(255, 255, 255, 0.5)'
            }
        ];
        this.barChartLegend = false;
        this.barChartType = 'bar';
        this.lineChartData1 = [
            { data: [22, 20, 26, 25, 19, 12, 15, 18, 16, 20], label: 'Bounce %' }
        ];
        this.lineChartLabels1 = ['1', '5', '10', '3', '8', '2', '6', '7', '9', '4'];
        this.lineChartOptions1 = {
            maintainAspectRatio: false,
            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            min: 0,
                            max: 30,
                            stepSize: 10,
                            beginAtZero: true
                        }
                    }]
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            legend: {
                display: false
            }
        };
        this.lineChartColors1 = [
            {
                backgroundColor: 'transparent',
                pointRadius: 2,
                borderWidth: 2,
                borderColor: '#fff',
            }
        ];
        this.lineChartLegend1 = false;
        this.lineChartType1 = 'line';
    }
    ngAfterViewInit() {
        const chart = c3.generate({
            bindto: '#visitor',
            data: {
                columns: [['Iphone', 60], ['Samsung', 12], ['One+', 28]],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: 'Sales',
                width: 20
            },
            legend: {
                hide: true
                // or hide: 'data1'
                // or hide: ['data1', 'data2']
            },
            color: {
                pattern: ['#4798e8', '#01c0c8', '#f6f6f6']
            }
        });
        // ==============================================================
        // Sales income
        // ==============================================================
        const chart2 = c3.generate({
            bindto: '#income',
            data: {
                columns: [
                    ['Growth Income', 250, 200, 100, 250, 300],
                    ['Net Income', 190, 100, 140, 200, 190]
                ],
                type: 'bar'
            },
            bar: {
                space: 0.2,
                // or
                width: 15 // this makes bar width 100px
            },
            axis: {
                y: {
                    tick: {
                        count: 4,
                        outer: false
                    }
                }
            },
            legend: {
                hide: true
                // or hide: 'data1'
                // or hide: ['data1', 'data2']
            },
            grid: {
                x: {
                    show: false
                },
                y: {
                    show: true
                }
            },
            size: {
                height: 300
            },
            color: {
                pattern: ['#4798e8', '#01c0c8']
            }
        });
    }
};
MixstatsComponent = __decorate([
    Component({
        selector: 'app-mix-stats',
        templateUrl: './mix-stats.component.html'
    }),
    __metadata("design:paramtypes", [])
], MixstatsComponent);
export { MixstatsComponent };
//# sourceMappingURL=mix-stats.component.js.map