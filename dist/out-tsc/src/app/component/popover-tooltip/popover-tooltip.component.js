var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
let NgbdPopTooltipComponent = class NgbdPopTooltipComponent {
    constructor() {
        this.greeting = {};
        this.name = 'World';
    }
    changeGreeting(greeting) {
        const isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    }
    recordShown() {
        this.lastShown = new Date();
    }
    recordHidden() {
        this.lastHidden = new Date();
    }
};
__decorate([
    ViewChild('p', { static: true }),
    __metadata("design:type", Object)
], NgbdPopTooltipComponent.prototype, "popover", void 0);
NgbdPopTooltipComponent = __decorate([
    Component({
        selector: 'app-ngbd-popover-tooltip',
        templateUrl: './popover-tooltip.component.html',
        encapsulation: ViewEncapsulation.None,
        styles: [
            `
      .card {
        overflow: hidden;
      }
      .my-custom-class {
        background: aliceblue;
        font-size: 125%;
      }
      .my-custom-class .arrow::after {
        border-top-color: aliceblue;
      }
    `
        ]
    })
], NgbdPopTooltipComponent);
export { NgbdPopTooltipComponent };
//# sourceMappingURL=popover-tooltip.component.js.map