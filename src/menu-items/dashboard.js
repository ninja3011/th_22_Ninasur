// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'LiveChat',
            title: 'LiveChat',
            type: 'item',
            url: '/LiveChat',
            icon: icons.IconDashboard
        },
        {
            title: 'Earthquake',
            type: 'item',
            url: '/disasters/?id=1',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: '2',
            title: 'Cyclone',
            type: 'item',
            url: '/disasters/?id=2',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: '3',
            title: 'Flood',
            type: 'item',
            url: '/disasters/?id=3',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: '4',
            title: 'Drought',
            type: 'item',
            url: '/disasters/?id=4',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'create-post',
            title: 'Create Post',
            type: 'item',
            url: '/create-post',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'allposts',
            title: 'All Posts',
            type: 'item',
            url: '/allposts',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
