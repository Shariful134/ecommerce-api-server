import { Router } from 'express';

import validateRequest from '../../middleware/validateRequest';
import { authValidation } from '../auth/auth.validation';

const router = Router();
router.post('/login', validateRequest(authValidation.registerValidatoin));

export const bookingsRoutes = router;
