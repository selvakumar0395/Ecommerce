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
import { Router, ActivatedRoute } from "@angular/router";
let NGXFormWizardComponent = class NGXFormWizardComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.router.navigate(['/forms/ngx/wizard'], { skipLocationChange: true });
    }
};
NGXFormWizardComponent = __decorate([
    Component({
        selector: 'multi-step-wizard-app',
        templateUrl: './ngx-wizard.component.html',
        styleUrls: ['./ngx-wizard.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute])
], NGXFormWizardComponent);
export { NGXFormWizardComponent };
//# sourceMappingURL=ngx-wizard.component.js.map