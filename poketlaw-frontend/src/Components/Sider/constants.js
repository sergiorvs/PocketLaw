import routesDictionary from '../../routes/routesDict';
import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CategoryIcon from '@material-ui/icons/Category';

const menuList = () => [
  {
    icon: <FavoriteIcon color={"primary"} />,
    name: 'Normas',
    link: routesDictionary.dashboard,
  },
    {
    icon: <FavoriteIcon color={"primary"} />,
    name: 'Favoritos',
    link: routesDictionary.dashboard,
  },
  {
    icon: <CategoryIcon color={"primary"} />,
    name: 'Categorias',
    link: routesDictionary.dashboard,
  },
  {
    icon: <AssignmentIcon color={"primary"} />,
    name: 'Notas',
    link: routesDictionary.dashboard,
  },
  {
    icon: <SettingsIcon color={"primary"} />,
    name: 'Configuración',
    link: routesDictionary.dashboard,
  },
];

export default menuList;
