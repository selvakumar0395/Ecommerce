import { WidgetappComponent } from './apps/widget-app.component';
import { WidgetdataComponent } from './data/widget-data.component';
export const WidgetRoutes = [
    {
        path: '',
        children: [
            {
                path: 'apps',
                component: WidgetappComponent,
                data: {
                    title: 'Widget Apps',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Widget Apps' }
                    ]
                }
            },
            {
                path: 'data',
                component: WidgetdataComponent,
                data: {
                    title: 'Widget Data',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Widget Data' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=widgets.routing.js.map