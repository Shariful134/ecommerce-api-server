import { Router } from 'express';
import { authRoutes } from '../modules/auth/auth.routes';
import { bookingsRoutes } from '../modules/booking/booking.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/bookings',
    route: bookingsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
