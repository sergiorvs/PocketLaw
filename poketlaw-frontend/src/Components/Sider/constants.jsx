import PeopleIcon from '@material-ui/icons/People';
import GavelIcon from '@material-ui/icons/Gavel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CategoryIcon from '@material-ui/icons/Category';
import StarsIcon from '@material-ui/icons/Stars';
import routesDictionary from '../../routes/routesDict';

export const menuList = [
  {
    id: 'about-us',
    title: 'About Us',
    img: PeopleIcon,
    link: routesDictionary.dashboard,
  },
  {
    id: 'laws',
    title: 'Laws',
    img: GavelIcon,
    link: routesDictionary.dashboard,
  },
  {
    id: 'pocket-bag',
    title: 'Pocket Bag',
    img: ShoppingCartIcon,
    link: routesDictionary.dashboard,
  },
  {
    id: 'categories',
    title: 'Categories',
    img: CategoryIcon,
    link: routesDictionary.dashboard,
    submenu: [
      {
        id: 'inicio',
        title: 'Inicio',
        link: routesDictionary.dashboard,
      },
    ],
  },
  {
    id: 'favorites',
    title: 'Favorites',
    img: StarsIcon,
    link: routesDictionary.dashboard,
  },
];
