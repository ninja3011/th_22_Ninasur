// assets
import { IconDashboard } from '@tabler/icons';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import AirIcon from '@mui/icons-material/Air';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import AddIcon from '@mui/icons-material/Add';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';

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
        },
        {
            id: 'create-post',
            title: 'Create Post',
            type: 'item',
            url: '/create-post',
            icon: AddIcon,
            breadcrumbs: false
        },
        {
            id: 'allposts',
            title: 'All Posts',
            type: 'item',
            url: '/allposts',
            icon: LayersRoundedIcon,
            breadcrumbs: false
        },
        {
            id: 'LiveChat',
            title: 'LiveChat',
            type: 'item',
            url: '/LiveChat',
            icon: ChatBubbleOutlineRoundedIcon
        }
    ]
};

export default dashboard;
