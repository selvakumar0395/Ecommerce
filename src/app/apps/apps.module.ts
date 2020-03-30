import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AppsRoutes } from './apps.routing';

@NgModule({
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
  ]
})
export class AppsModule { }
 