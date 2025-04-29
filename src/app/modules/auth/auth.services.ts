import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { User } from './auth.model';
import { TUsers } from './auth.type';

const registerIntoDB = async (payload: TUsers) => {
  //check User
  const user = await User.isUserExistsByEmail(payload.email);

  if (user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Email All Ready Exists');
  }

  const result = await User.create(payload);
  return result;
};

export const authServices = {
  registerIntoDB,
};
