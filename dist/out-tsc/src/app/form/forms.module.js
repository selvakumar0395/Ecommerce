var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsRoutes } from './forms.routing';
import { CustomFormsModule } from 'ng2-validation';
import { NGXFormWizardModule } from "./ngx-wizard/ngx-wizard.module";
import { FormBasicComponent } from './form-basic/basic.component';
import { FormvalComponent } from './form-validation/form-validation.component';
import { CheckradioComponent } from './checkbox-radio/cr.component';
import { ForminputsComponent } from './form-inputs/inputs.component';
import { GridsComponent } from './input-grids/grids.component';
import { InputgroupsComponent } from './input-groups/input-groups.component';
import { FormhorizontalComponent } from './form-horizontal/horizontal.component';
import { FormactionsComponent } from './form-actions/actions.component';
import { FormrowsepComponent } from './form-row-separator/row-sep.component';
import { FormstripedComponent } from './form-striped-row/striped.component';
import { FormdetailComponent } from './form-detail/detail.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
let FormModule = class FormModule {
};
FormModule = __decorate([
    NgModule({
        imports: [CommonModule, RouterModule.forChild(FormsRoutes), FormsModule, NGXFormWizardModule, NgMultiSelectDropDownModule, NgbModule, CustomFormsModule, ReactiveFormsModule],
        declarations: [
            FormBasicComponent,
            FormvalComponent,
            CheckradioComponent,
            ForminputsComponent,
            GridsComponent,
            InputgroupsComponent,
            FormhorizontalComponent,
            FormactionsComponent,
            FormrowsepComponent,
            FormstripedComponent,
            FormdetailComponent,
            MultiselectComponent
        ]
    })
], FormModule);
export { FormModule };
//# sourceMappingURL=forms.module.js.map