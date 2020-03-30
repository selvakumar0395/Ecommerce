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
import { FormBuilder } from '@angular/forms';
let ButtonsComponent = class ButtonsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.model = {
            left: true,
            middle: false,
            right: false
        };
        this.model1 = 1;
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.checkboxGroupForm = this.formBuilder.group({
            left: true,
            middle: false,
            right: false
        });
        this.radioGroupForm = this.formBuilder.group({
            model: 1
        });
    }
};
ButtonsComponent = __decorate([
    Component({
        templateUrl: 'buttons.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder])
], ButtonsComponent);
export { ButtonsComponent };
//# sourceMappingURL=buttons.component.js.map