import { Router } from 'express';
import { authValidation } from './auth.validation';
import validateRequest from '../../middleware/validateRequest';
import { authControllers } from './auth.controllers';

const router = Router();
router.post(
  '/register',
  validateRequest(authValidation.registerValidatoin),
  authControllers.registerDB,
);

export const authRoutes = router;
