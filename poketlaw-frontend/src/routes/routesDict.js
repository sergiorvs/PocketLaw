const routesDictionary = {
  aboutUs: '/',
  lawDetail: (id) => `/law/${id}/`,
  law: '/law/:id/',
  activateAccount: '/activate/account/:uid/:token/',
  passwordResetConfirmation: '/reset/password/:uid/:token/',
  passwordReset: '/reset/password/',
  register: '/register/',
  psychologicalSupport: '/psychological-support/',
  favorites: '/favorites/',
  login: '/login/',
  error: '/404',
  laws: '/laws/',
  dashboard: '/laws/',
};

export default routesDictionary;
