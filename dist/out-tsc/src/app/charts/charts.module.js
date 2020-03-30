var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsRoutes } from './charts.routing';
import { ChartistjsComponent } from './chartist-js/chartistjs.component';
import { DynamicChartComponent } from './chartist-js/dynamic.component';
import { ChartjsComponent } from './chart-js/chartjs.component';
import { NgxChartComponent } from './ngx-charts/ngx-chart.component';
let ChartModule = class ChartModule {
};
ChartModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ChartsModule,
            NgbModule,
            ChartistModule,
            RouterModule.forChild(ChartsRoutes),
            FormsModule,
            NgxChartsModule
        ],
        declarations: [
            ChartjsComponent,
            DynamicChartComponent,
            ChartistjsComponent,
            NgxChartComponent
        ]
    })
], ChartModule);
export { ChartModule };
//# sourceMappingURL=charts.module.js.map