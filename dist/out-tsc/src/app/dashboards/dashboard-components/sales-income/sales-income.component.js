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
let SalesIncomeComponent = class SalesIncomeComponent {
    constructor() { }
    ngAfterViewInit() {
        const chart = c3.generate({
            bindto: '#income',
            data: {
                columns: [
                    ['Growth Income', 100, 200, 300, 300, 400, 200],
                    ['Net Income', 130, 100, 440, 200, 320, 100]
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
                        count: 3,
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
                height: 270
            },
            color: {
                pattern: ['#4798e8', '#ccc']
            }
        });
        const chart2 = c3.generate({
            bindto: '#sales',
            data: {
                columns: [['One+', 50], ['T', 60], ['Samsung', 10]],
                type: 'donut'
            },
            donut: {
                label: {
                    show: false
                },
                title: '',
                width: 18
            },
            size: {
                height: 150
            },
            legend: {
                hide: true
                // or hide: 'data1'
                // or hide: ['data1', 'data2']
            },
            color: {
                pattern: ['#ffffff', '#4798e8', '#24d2b5', '#20aee3']
            }
        });
        // ==============================================================
        // Sales Prediction
        // ==============================================================
        const chart3 = c3.generate({
            bindto: '#prediction',
            data: {
                columns: [['data', 91.4]],
                type: 'gauge'
            },
            color: {
                pattern: ['#20aee3', '#20aee3', '#20aee3', '#24d2b5'],
                threshold: {
                    //            unit: 'value', // percentage is default
                    //            max: 200, // 100 is default
                    values: [30, 60, 90, 100]
                }
            },
            gauge: {
                width: 22
            },
            size: {
                height: 120,
                width: 150
            }
        });
    }
};
SalesIncomeComponent = __decorate([
    Component({
        selector: 'app-sales-income',
        templateUrl: './sales-income.component.html'
    }),
    __metadata("design:paramtypes", [])
], SalesIncomeComponent);
export { SalesIncomeComponent };
//# sourceMappingURL=sales-income.component.js.map