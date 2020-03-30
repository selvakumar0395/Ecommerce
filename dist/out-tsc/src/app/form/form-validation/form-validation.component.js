var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
let FormvalComponent = class FormvalComponent {
    constructor() {
        this.radioOptions = ['Choose this', 'Choose me'];
    }
    ngOnInit() {
        this.regularForm = new FormGroup({
            'inputEmail': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
            'textArea': new FormControl(null, [Validators.required]),
            'radioOption': new FormControl('Option one is this')
        }, { updateOn: 'blur' });
    }
    onReactiveFormSubmit() {
        this.regularForm.reset();
    }
    onTemplateFormSubmit() {
        this.floatingLabelForm.reset();
    }
    onCustomFormSubmit() {
        this.validationForm.reset();
    }
};
__decorate([
    ViewChild('f', { static: true }),
    __metadata("design:type", NgForm)
], FormvalComponent.prototype, "floatingLabelForm", void 0);
__decorate([
    ViewChild('vform', { static: true }),
    __metadata("design:type", FormGroup)
], FormvalComponent.prototype, "validationForm", void 0);
FormvalComponent = __decorate([
    Component({
        templateUrl: './form-validation.component.html'
    })
], FormvalComponent);
export { FormvalComponent };
//# sourceMappingURL=form-validation.component.js.map