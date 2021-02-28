import routesDictionary from './routesDict';
import asyncComponent from '../HOC/AsyncComponent';

const AsyncActivateAccount = asyncComponent(() => import('../views/ActivateAccount'));
const AsyncChangePassword = asyncComponent(() => import('../views/ChangePassword'));
const AsyncPasswordReset = asyncComponent(() => import('../views/PasswordReset'));
const AsyncLogin = asyncComponent(() => import('../views/Login'));
const AsyncRegister = asyncComponent(() => import('../views/Register'));
const AsyncDashboard = asyncComponent(() => import('../views/DashBoard'));


const routes = [
  {
    path: routesDictionary.dashboard,
    component: AsyncDashboard,
    type: 'private',
    title: 'Home',
  },
  {
    path: routesDictionary.activateAccount,
    component: AsyncActivateAccount,
    type: 'public',
    title: 'Activar cuenta',
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
    path: routesDictionary.register,
    component: AsyncRegister,
    type: 'public',
    title: 'Register',
  },
  {
    path: routesDictionary.login,
    component: AsyncLogin,
    type: 'public',
    title: 'Login',
  },
];

export default routes;
