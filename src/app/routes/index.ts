import express from 'express';
import userRoutes from '../modules/users/user.route'
import cowRoutes from '../modules/cow/cow.route'

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: userRoutes
  },
  {
    path: '/users',
    route: userRoutes
  },
  
  {
    path: '/cows',
    route: cowRoutes
  }

];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;