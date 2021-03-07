const routesDictionary = {
  lawDetail: (id) => `/law/${id}/`,
  law: '/law/:id/',
  activateAccount: '/activate/account/:uid/:token/',
  passwordResetConfirmation: '/reset/password/:uid/:token/',
  passwordReset: '/reset/password/',
  register: '/register/',
  favorites: '/favorites/',
  login: '/login/',
  error: '/404',
  dashboard: '/',
};

export default routesDictionary;
