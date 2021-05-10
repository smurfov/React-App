import Home from './pages/Home';
import Help from './pages/Help';
import Privacy from './pages/Privacy';
import Hotels from './pages/Hotels';
import {HOME_ROUTE, HELP_ROUTE, PRIVACY_ROUTE, HOTELS_ROUTE} from './utils/const'

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home
  }, {
    path: HELP_ROUTE,
    Component: Help
  }, {
    path: PRIVACY_ROUTE,
    Component: Privacy
  }, {
    path: HOTELS_ROUTE,
    Component: Hotels
  }
];

export default publicRoutes;