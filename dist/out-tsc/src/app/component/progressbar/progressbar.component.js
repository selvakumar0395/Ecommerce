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
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
let NgbdpregressbarBasicComponent = class NgbdpregressbarBasicComponent {
    constructor(config) {
        this.height = '20px';
        // customize default values of progress bars used by this component tree
        config.max = 100;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
    }
};
NgbdpregressbarBasicComponent = __decorate([
    Component({
        selector: 'app-ngbd-progressbar',
        templateUrl: './progressbar.component.html',
        providers: [NgbProgressbarConfig]
    }),
    __metadata("design:paramtypes", [NgbProgressbarConfig])
], NgbdpregressbarBasicComponent);
export { NgbdpregressbarBasicComponent };
//# sourceMappingURL=progressbar.component.js.map