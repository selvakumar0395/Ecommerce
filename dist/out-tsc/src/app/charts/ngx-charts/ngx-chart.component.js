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
import * as shape from 'd3-shape';
import { single, multi, generateData } from './chartData';
let NgxChartComponent = class NgxChartComponent {
    constructor() {
        this.range = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.autoScale = true;
        this.timeline = false;
        this.barPadding = 8;
        this.groupPadding = 0;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.view = '';
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.arcWidth = 0.25;
        this.rangeFillOpacity = 0.15;
        this.colorScheme = {
            domain: ['#4798e8', '#22c6ab', '#ffbc34', '#ef6e6e', '#01c0c8', '#e6f2fa']
        };
        this.schemeType = 'ordinal';
        // line interpolation
        this.curve = shape.curveLinear;
        Object.assign(this, {
            single,
            multi
        });
        this.dateData = generateData(6, false);
        this.dateDataWithRange = generateData(2, true);
    }
    get dateDataWithOrWithoutRange() {
        if (this.range) {
            return this.dateDataWithRange;
        }
        else {
            return this.dateData;
        }
    }
    select(data) {
        console.log('Item clicked', data);
    }
    onLegendLabelClick(entry) {
        console.log('Legend clicked', entry);
    }
};
NgxChartComponent = __decorate([
    Component({
        selector: 'app-ngxchart',
        templateUrl: './ngx-chart.component.html',
        styleUrls: ['./ngx-chart.component.scss']
    }),
    __metadata("design:paramtypes", [])
], NgxChartComponent);
export { NgxChartComponent };
//# sourceMappingURL=ngx-chart.component.js.map