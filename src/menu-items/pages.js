// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //
const user = localStorage.getItem('User')

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: !user ? [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register',
                    target: true
                }
            ] : [
                {
                    id: 'logout',
                    title: 'Logout',
                    type: 'item',
                    url: '/logout',
                    target: true
                },
            ]
        }
    ]
};

export default pages;
