import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { SimplelineComponent } from './simpleline/simpleline.component';
import { MaterialComponent } from './material/material.component';
import { IconmindComponent } from './iconmind/iconmind.component';
export const IconsRoutes = [
    {
        path: '',
        children: [
            {
                path: 'fontawesome',
                component: FontawesomeComponent,
                data: {
                    title: 'FontAwesome',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'FontAwesome' }
                    ]
                }
            },
            {
                path: 'simpleline',
                component: SimplelineComponent,
                data: {
                    title: 'Simple-Line-Icon',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Simple-Line-Icon' }
                    ]
                }
            },
            {
                path: 'material',
                component: MaterialComponent,
                data: {
                    title: 'Material-Icon',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Material-Icon' }
                    ]
                }
            },
            {
                path: 'iconmind',
                component: IconmindComponent,
                data: {
                    title: 'Iconmind Icons',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Iconmind Icons' }
                    ]
                }
            }
        ]
    }
];
//# sourceMappingURL=icons.routing.js.map