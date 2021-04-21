import routesDictionary from './routesDict';
import asyncComponent from '../HOC/AsyncComponent';

const AsyncActivateAccount = asyncComponent(() => import('../views/ActivateAccount'));
const AsyncChangePassword = asyncComponent(() => import('../views/ChangePassword'));
const AsyncPasswordReset = asyncComponent(() => import('../views/PasswordReset'));
const AsyncLogin = asyncComponent(() => import('../views/Login'));
const AsyncRegister = asyncComponent(() => import('../views/Register'));
const AsyncDashboard = asyncComponent(() => import('../views/DashBoard'));
const AsyncAboutUs = asyncComponent(() => import('../views/AboutUs'));
const AsyncLaw = asyncComponent(() => import('../views/LawDetail'));
const AsyncPsychologicalSupport = asyncComponent(() => import('../views/PsychologicalSupport'))
const AsyncFavorites = asyncComponent(() => import('../views/Favorites'))


const routes = [
  {
    path: routesDictionary.law,
    component: AsyncLaw,
    type: 'persistent',
    title: 'Law',
  },
  {
    path: routesDictionary.psychologicalSupport,
    component: AsyncPsychologicalSupport,
    type: 'private',
    title: 'Soporte',
  },
  {
    path: routesDictionary.favorites,
    component: AsyncFavorites,
    type: 'private',
    title: 'Favoritos',
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
  {
    path: routesDictionary.dashboard,
    component: AsyncDashboard,
    type: 'persistent',
    title: 'Home',
  },
  {
    path: routesDictionary.aboutUs,
    component: AsyncAboutUs,
    type: 'persistent',
    title: 'PocketLaw',
  },
];

export default routes;
