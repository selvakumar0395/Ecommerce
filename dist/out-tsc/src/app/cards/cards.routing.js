import { BasicComponent } from './basic/basic.component';
import { CustomComponent } from './custom/custom.component';
import { WeatherComponent } from './weather/weather.component';
export const CardsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'basiccards',
                component: BasicComponent,
                data: {
                    title: 'Basic Cards',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Basic Cards' }
                    ]
                }
            },
            {
                path: 'customcards',
                component: CustomComponent,
                data: {
                    title: 'Custom Cards',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Custom Cards' }
                    ]
                }
            },
            {
                path: 'weathercards',
                component: WeatherComponent,
                data: {
                    title: 'Weather Cards',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Weather Cards' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=cards.routing.js.map