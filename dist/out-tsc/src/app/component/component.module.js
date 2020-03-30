var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule } from 'angular-notifier';
import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { NgbdtypeheadBasicComponent } from './typehead/typehead.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { NotifierComponent } from './notifier/notifier.component';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(ComponentsRoutes),
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
            NotifierModule
        ],
        declarations: [
            NgbdpregressbarBasicComponent,
            NgbdpaginationBasicComponent,
            NgbdAccordionBasicComponent,
            NgbdAlertBasicComponent,
            NgbdCarouselBasicComponent,
            NgbdDatepickerBasicComponent,
            NgbdDropdownBasicComponent,
            NgbdModalBasicComponent,
            NgbdPopTooltipComponent,
            NgbdratingBasicComponent,
            NgbdtabsBasicComponent,
            NgbdtimepickerBasicComponent,
            NgbdtypeheadBasicComponent,
            ButtonsComponent,
            CardsComponent,
            NotifierComponent
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=component.module.js.map