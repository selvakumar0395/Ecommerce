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
const data = require('./data.json');
let DynamicChartComponent = class DynamicChartComponent {
    constructor() {
        this.chartTypes = ['Bar', 'Line'];
        this.type = 'Bar';
        this.data = data['Bar'];
        this.options = {
            axisX: {
                showLabel: false
            },
            axisY: {
                showLabel: false
            }
        };
    }
};
DynamicChartComponent = __decorate([
    Component({
        selector: 'app-dynamic-chart',
        template: `
    <div class="row">
      <div class="col-md-6">
        <h4>Dynamic Chart Types</h4>
      </div>
      <div class="col-md-6">
        <select class="form-control" [(ngModel)]="type">
          <option *ngFor="let type of chartTypes" [ngValue]="type">{{type}}</option>
        </select>
      </div>
    </div>
    <x-chartist
      [data]="data"
      [type]="type"
      [options]="options">
    </x-chartist>
  `
    }),
    __metadata("design:paramtypes", [])
], DynamicChartComponent);
export { DynamicChartComponent };
//# sourceMappingURL=dynamic.component.js.map