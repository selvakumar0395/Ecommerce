import { Routes } from '@angular/router';

import { CancelledComponent } from './cancelled/cancelled.component';
import { ReceivedComponent } from './received/received.component';
import { DispatchedComponent } from './dispatched/dispatched.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { AbandonedComponent } from './abandoned/abandoned.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
export const OrdersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'received',
        component: ReceivedComponent,
        data: {
          title: 'Received Orders',
          urls: [
            { title: 'Orders', url: '/received' },
            { title: 'Received' }
          ]
        }
      },
      {
        path: 'dispatched',
        component: DispatchedComponent,
        data: {
          title: 'Dispatched Orders',
          urls: [
            { title: 'Orders', url: '/dispatched' },
            { title: 'Dispatched' }
          ]
        }
      },
      {
        path: 'delivered',
        component: DeliveredComponent,
        data: {
          title: 'Delivered Orders',
          urls: [
            { title: 'Orders', url: '/delivered' },
            { title: 'Delivered' }
          ]
        }
      },
      {
        path: 'cancelled',
        component: CancelledComponent,
        data: {
          title: 'Cancelled Orders',
          urls: [
            { title: 'Orders', url: '/cancelled' },
            { title: 'Cancelled' }
          ]
        }
      },
      {
        path: 'abandoned',
        component: AbandonedComponent,
        data: {
          title: 'Abandoned Orders',
          urls: [
            { title: 'Orders', url: '/abandoned' },
            { title: 'Abandoned' }
          ]
        }
      },
      {
        path: 'enquiry',
        component: EnquiryComponent,
        data: {
          title: 'Enquiry',
          urls: [
            { title: 'Orders', url: '/enquiry' },
            { title: 'Enquiry' }
          ]
        }
      },
    ]
  }
];
