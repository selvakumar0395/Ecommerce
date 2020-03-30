var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { NGXWizardRoutingModule } from "./ngx-wizard-routing.module";
import { FormsModule } from '@angular/forms';
/* App Root */
import { NGXFormWizardComponent } from './ngx-wizard.component';
import { NavbarComponent } from './navbar/navbar.component';
/* Feature Components */
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
/* Shared Service */
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { CommonModule } from "@angular/common";
let NGXFormWizardModule = class NGXFormWizardModule {
};
NGXFormWizardModule = __decorate([
    NgModule({
        imports: [CommonModule,
            FormsModule,
            NGXWizardRoutingModule
        ],
        providers: [{ provide: FormDataService, useClass: FormDataService },
            { provide: WorkflowService, useClass: WorkflowService }],
        declarations: [NGXFormWizardComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent],
        bootstrap: [NGXFormWizardComponent]
    })
], NGXFormWizardModule);
export { NGXFormWizardModule };
//# sourceMappingURL=ngx-wizard.module.js.map