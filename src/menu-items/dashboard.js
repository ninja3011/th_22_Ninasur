// assets
import { IconDashboard } from '@tabler/icons';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AirIcon from '@mui/icons-material/Air';
import CallSplitIcon from '@mui/icons-material/CallSplit';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
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
            id: '1',
        },
        {
            title: 'Earthquake',
            type: 'item',
            url: '/disasters/1',
            icon: CallSplitIcon,
            breadcrumbs: false
        },
        {
            id: '2',
            title: 'Cyclone',
            type: 'item',
            url: '/disasters/2',
            icon: AirIcon,
            breadcrumbs: false
        },
        {
            id: '3',
            title: 'Flood',
            type: 'item',
            url: '/disasters/3',
            icon: UmbrellaIcon,
            breadcrumbs: false
        },
        {
            id: '4',
            title: 'Drought',
            type: 'item',
            url: '/disasters/4',
            icon: WbSunnyIcon,
            breadcrumbs: false
        }

    ]
};

export default dashboard;
