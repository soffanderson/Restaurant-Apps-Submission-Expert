import Restaurant from '../views/pages/restaurant';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';

const routes = {
  '/': Restaurant, // default page
  '/restaurant': Restaurant,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;
