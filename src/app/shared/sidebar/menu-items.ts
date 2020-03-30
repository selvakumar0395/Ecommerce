import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true, 
    submenu: []
  },
  {
    path: '',
    title: 'Dashboards',
    icon: 'icon-Car-Wheel',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/dashboard/dashboard1',
        title: 'Dashboard 1',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard2',
        title: 'Dashboard 2',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/dashboard/dashboard3',
        title: 'Dashboard 3',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  {
    path: '/Orders',
    title: 'Orders',
    icon: 'icon-Car-Wheel',
    class: 'has-arrow',
    extralink: false,
    submenu: [
      {
        path: '/orders/received',
        title: 'Received',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/orders/dispatched',
        title: 'Dispatched',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/orders/cancelled',
        title: 'Cancelled',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/orders/delivered',
        title: 'Delivered',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/orders/abandoned',
        title: 'Abandoned',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/orders/enquiry',
        title: 'Enquiry',
        icon: '',
        class: '',
        extralink: false,
        submenu: []
      }
    ]
  },
  // {
  //   path: '',
  //   title: 'UI Elements',
  //   icon: 'icon-Paint-Brush',
  //   class: 'has-arrow',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/component/accordion',
  //       title: 'Accordion',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/alert',
  //       title: 'Alert',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/carousel',
  //       title: 'Carousel',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/dropdown',
  //       title: 'Dropdown',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/modal',
  //       title: 'Modal',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/pagination',
  //       title: 'Pagination',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/poptool',
  //       title: 'Popover & Tooltip',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/progressbar',
  //       title: 'Progressbar',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/rating',
  //       title: 'Ratings',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/tabs',
  //       title: 'Tabs',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/timepicker',
  //       title: 'Timepicker',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/component/buttons',
  //       title: 'Button',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     { 
	// 	path: '/component/notifier', 
	// 	title: 'Notifier', 
	// 	icon: 'mdi mdi-bandcamp', 
	// 	class: '', 
	// 	extralink: false, 
	// 	submenu: [] 
	//   }
  //   ]
  // },
  
  // {
  //   path: '',
  //   title: 'Extra Components',
  //   icon: 'icon-Idea-5',
  //   class: 'has-arrow',
  //   extralink: false,
  //   submenu: [
  //     {
  //       path: '/extra-component/toastr',
  //       title: 'Toastr',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/extra-component/upload',
  //       title: 'File Upload',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/extra-component/editor',
  //       title: 'Editor',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/extra-component/dragndrop',
  //       title: 'Drag n Drop',
  //       icon: '',
  //       class: '',
  //       extralink: false,
  //       submenu: []
  //     }
  //   ]
  // },
  
  // {
  //   path: '',
  //   title: 'Forms',
  //   icon: 'mdi mdi-dots-horizontal',
  //   class: 'nav-small-cap',
  //   extralink: true,
  //   submenu: []
  // },

];
