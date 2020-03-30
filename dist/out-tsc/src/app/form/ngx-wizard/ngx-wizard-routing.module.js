var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NGXFormWizardComponent } from "./ngx-wizard.component";
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
const routes = [
    {
        path: '',
        component: NGXFormWizardComponent,
        data: {
            title: 'ngx-wizard'
        },
        children: [
            {
                path: 'wizard',
                component: PersonalComponent,
                data: {
                    title: 'Personal'
                }
            },
            {
                path: 'work',
                component: WorkComponent,
                data: {
                    title: 'Work'
                }
            },
            {
                path: 'address',
                component: AddressComponent,
                data: {
                    title: 'Address'
                }
            },
            {
                path: 'result',
                component: ResultComponent,
                data: {
                    title: 'Result'
                }
            }
        ]
    }
];
let NGXWizardRoutingModule = class NGXWizardRoutingModule {
};
NGXWizardRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NGXWizardRoutingModule);
export { NGXWizardRoutingModule };
export const routedComponents = [NGXFormWizardComponent];
//# sourceMappingURL=ngx-wizard-routing.module.js.map