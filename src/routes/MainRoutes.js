import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const CreatePost = Loadable(lazy(() => import('views/createpost')));

const LiveChat =Loadable(lazy(() => import('views/LiveChat')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

const AllPosts = Loadable(lazy(() => import('views/allPosts')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/disasters/1',
            element: <SamplePage id={1} />
        },
        {
            path: '/disasters/2',
            element: <SamplePage id={2} />
        },
        {
            path: '/disasters/3',
            element: <SamplePage id={3} />
        },
        {
            path: '/disasters/4',
            element: <SamplePage id={4} />
        },
        {
            path: '/create-post',
            element: <CreatePost />
        },
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/LiveChat',
            element: <LiveChat />
        },
        {
            path: '/allposts',
            element: <AllPosts />
        },
    ]
};

export default MainRoutes;
