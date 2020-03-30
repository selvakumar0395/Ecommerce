var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FormData } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
let ResultComponent = class ResultComponent {
    constructor(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Thank You!';
        this.isFormValid = false;
    }
    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    }
    //Submit button event Starts
    submit() {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", FormData)
], ResultComponent.prototype, "formData", void 0);
ResultComponent = __decorate([
    Component({
        selector: 'mt-wizard-result',
        templateUrl: './result.component.html',
        styleUrls: ['./result.component.scss']
    }),
    __metadata("design:paramtypes", [FormDataService])
], ResultComponent);
export { ResultComponent };
//# sourceMappingURL=result.component.js.map