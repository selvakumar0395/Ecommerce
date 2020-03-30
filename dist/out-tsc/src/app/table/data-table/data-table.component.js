var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DatatableComponent_1;
import { Component, ViewChild } from '@angular/core';
const data = require('./company.json');
let DatatableComponent = DatatableComponent_1 = class DatatableComponent {
    constructor() {
        this.editing = {};
        this.rows = [];
        this.temp = [...data];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
        this.rows = data;
        this.temp = [...data];
        setTimeout(() => {
            this.loadingIndicator = false;
        }, 1500);
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table = data;
    }
    updateValue(event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex);
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    }
};
__decorate([
    ViewChild(DatatableComponent_1, { static: false }),
    __metadata("design:type", DatatableComponent)
], DatatableComponent.prototype, "table", void 0);
DatatableComponent = DatatableComponent_1 = __decorate([
    Component({
        selector: 'app-data-table',
        templateUrl: './data-table.component.html',
        styleUrls: ['./data-table.css']
    }),
    __metadata("design:paramtypes", [])
], DatatableComponent);
export { DatatableComponent };
//# sourceMappingURL=data-table.component.js.map