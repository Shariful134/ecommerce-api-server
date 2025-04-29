import { Router } from 'express';
import { authValidation } from './auth.validation';
import validateRequest from '../../middleware/validateRequest';
import { authControllers } from './auth.controllers';

const router = Router();

//register
router.post(
  '/register',
  validateRequest(authValidation.registerValidatoin),
  authControllers.registerDB,
);

router.post(
  '/login',
  validateRequest(authValidation.loginValidatoin),
  authControllers.loginDB,
);

export const authRoutes = router;
