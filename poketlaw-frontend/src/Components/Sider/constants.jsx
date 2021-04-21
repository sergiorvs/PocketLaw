import PeopleIcon from '@material-ui/icons/People';
import GavelIcon from '@material-ui/icons/Gavel';
import CategoryIcon from '@material-ui/icons/Category';
import StarsIcon from '@material-ui/icons/Stars';
import routesDictionary from '../../routes/routesDict';
import StreetviewIcon from '@material-ui/icons/Streetview';


export const menuList = (isLogin) => {
  const sider = [
    {
      id: 'about-us',
      title: 'aboutUs',
      img: PeopleIcon,
      link: routesDictionary.aboutUs,
    },
    {
      id: 'laws',
      title: 'laws',
      img: GavelIcon,
      link: routesDictionary.laws,
    },
  ];

  const siderLogin = [
    {
      id: 'psychological-support',
      title: 'psychological',
      img: StreetviewIcon,
      link: routesDictionary.psychologicalSupport,
    },
    {
      id: 'categories',
      title: 'categories',
      img: CategoryIcon,
      link: routesDictionary.dashboard,
      submenu: [
        {
          id: 'inicio',
          title: 'init',
          link: routesDictionary.dashboard,
        },
      ],
    },
    {
      id: 'favorites',
      title: 'Favorites',
      img: StarsIcon,
      link: routesDictionary.favorites,
    },
  ];

  if (isLogin) {
    sider.push(...siderLogin);
  }

  return sider;
};
