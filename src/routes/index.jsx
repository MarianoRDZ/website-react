import { lazy } from 'react';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'));
const CV = lazy(() => import('../pages/CV'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const routes = [
  {
    path: '/',
    element: Home,
    title: 'Home',
  },
  {
    path: '/cv',
    element: CV,
    title: 'Resume',
  },
  {
    path: '/contact',
    element: Contact,
    title: 'Contact',
  },
  {
    path: '*',
    element: NotFound,
    title: 'Not Found',
  },
];
