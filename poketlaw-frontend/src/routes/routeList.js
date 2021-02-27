import routesDictionary from './routesDict';
import asyncComponent from '../HOC/AsyncComponent';

const AsyncChangePassword = asyncComponent(() => import('../views/ChangePassword'));
const AsyncPasswordReset = asyncComponent(() => import('../views/PasswordReset'));
const AsyncLogin = asyncComponent(() => import('../views/Login'));
const AsyncDashboard = asyncComponent(() => import('../views/DashBoard'));


const routes = [
  {
    path: routesDictionary.dashboard,
    component: AsyncDashboard,
    type: 'private',
    title: 'Home',
  },
  {
    path: routesDictionary.passwordResetConfirmation,
    component: AsyncChangePassword,
    type: 'public',
    title: 'Cambiar contraseña',
  },
  {
    path: routesDictionary.passwordReset,
    component: AsyncPasswordReset,
    type: 'public',
    title: 'Recuperar contraseña',
  },
  {
    path: routesDictionary.login,
    component: AsyncLogin,
    type: 'public',
    title: 'Login',
  },
];

export default routes;
