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
import { FormDataService } from '../data/formData.service';
import { WorkflowService } from "../workflow/workflow.service";
import { STEPS } from "../workflow/workflow.model";
import { Router, ActivatedRoute } from "@angular/router";
let AddressComponent = class AddressComponent {
    constructor(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'Where do you live?';
    }
    ngOnInit() {
        this.address = this.formDataService.getAddress();
    }
    //Save button event Starts
    save(form) {
        if (!form.valid)
            return;
        this.formDataService.setAddress(this.address);
        let firstState = this.workflowService.getFirstInvalidStep(STEPS.work);
        this.router.navigate(['result'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
    //Save button event Ends
    //Cancel button event Starts
    cancel() {
        this.router.navigate(['work'], { relativeTo: this.route.parent, skipLocationChange: true });
    }
};
AddressComponent = __decorate([
    Component({
        selector: 'mt-wizard-address',
        templateUrl: './address.component.html',
        styleUrls: ['./address.component.scss']
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute, FormDataService,
        WorkflowService])
], AddressComponent);
export { AddressComponent };
//# sourceMappingURL=address.component.js.map