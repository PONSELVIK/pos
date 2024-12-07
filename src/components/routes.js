// routes.js
import AnonymousLayout from './AnonymousLayout';
import MainLayout from './MainLayout';
import Counter from '../pages/Counter';
import Items from '../pages/Items';
import Today from '../pages/Today';
import Reports from '../pages/Reports';
import More from '../pages/More';
import Login from './Login';

export const routes = [
    {
        layout: AnonymousLayout, // Layout for public or anonymous routes
        routes: [
            {
                name: 'Login',
                title: 'Login page',
                component: Login,
                path: '/Login',
                isPublic: true,
            },
        ],
    },
    {
        layout: MainLayout, // Layout for authenticated routes
        routes: [
            {
                name: 'Today',
                title: 'Today page',
                component: Today,
                path: '/today',
            },
            {
                name: 'Counter',
                title: 'Counter page',
                component: Counter,
                path: '/counter',
            },
            {
                name: 'users',
                title: 'Users',
                hasSiderLink: true,
                routes: [
                    {
                        name: 'Counter',
                        title: 'List of users',
                        hasSiderLink: true,
                        component: Counter,
                        path: '/counter',
                    },
                    {
                        name: 'Items',
                        title: 'Items',
                        hasSiderLink: true,
                        component: Items,
                        path: '/items',
                    },
                ],
            },
        ],
    },
];
