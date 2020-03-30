var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppsRoutes } from './apps.routing';
import { ChatComponent } from './chat/chat.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
let AppsModule = class AppsModule {
};
AppsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            NgbModule,
            NgbModalModule.forRoot(),
            CalendarModule.forRoot(),
            QuillModule.forRoot(),
            DragulaModule.forRoot(),
            RouterModule.forChild(AppsRoutes),
            PerfectScrollbarModule
        ],
        declarations: [
            ChatComponent,
            TicketlistComponent,
            TicketdetailsComponent,
            TaskboardComponent,
            FullcalendarComponent
        ]
    })
], AppsModule);
export { AppsModule };
//# sourceMappingURL=apps.module.js.map