const routesDictionary = {
  lawDetail: (id) => `/law/${id}/`,
  law: '/law/:id/',
  dashboard: '/home/',
  activateAccount: '/activate/account/:uid/:token/',
  passwordResetConfirmation: '/reset/password/:uid/:token/',
  passwordReset: '/reset/password/',
  register: '/register/',
  login: '/',
  error: '/404',
};

export default routesDictionary;
