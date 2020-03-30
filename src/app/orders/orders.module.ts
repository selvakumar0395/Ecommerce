import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OrdersRoutes } from './orders.routing';

import { CancelledComponent } from './cancelled/cancelled.component';
import { ReceivedComponent } from './received/received.component';
import { DispatchedComponent } from './dispatched/dispatched.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AbandonedComponent } from './abandoned/abandoned.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(OrdersRoutes),
    Ng2SmartTableModule
  ],
  declarations: [
    DeliveredComponent,
    CancelledComponent,
    ReceivedComponent,
    DispatchedComponent,
    AbandonedComponent,
    EnquiryComponent
  ]
})
export class OrdersModule {}
