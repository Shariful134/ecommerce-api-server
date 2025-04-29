import { Request, Response } from 'express';
import catchAsynch from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { authServices } from './auth.services';

//register
const registerDB = catchAsynch(async (req, res) => {
  const result = await authServices.registerIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

//login
const loginDB = catchAsynch(async (req, res) => {
  const result = await authServices.loginIntoDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User Login successfully',
    data: result,
  });
});

export const authControllers = {
  registerDB,
  loginDB,
};
