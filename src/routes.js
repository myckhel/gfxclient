import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Dashboard = React.lazy(() => import('./views/App/Dashboard'));
const Booking = React.lazy(() => import('./views/App/Booking'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/booking', exact: true, name: 'Booking', component: Booking },
];

export default routes;
