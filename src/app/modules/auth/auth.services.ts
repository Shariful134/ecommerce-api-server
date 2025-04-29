import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { User } from './auth.model';
import { TUsers } from './auth.type';
import { TUserLogin } from './auth.interface';

//register
const registerIntoDB = async (payload: TUsers) => {
  //check User
  const user = await User.isUserExistsByEmail(payload.email);

  if (user) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'Email All Ready Exists');
  }

  const result = await User.create(payload);
  return result;
};

//login
const loginIntoDB = async (payload: TUserLogin) => {
  //check User
  const user = await User.isUserExistsByEmail(payload.email);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User Email is found!');
  }

  //check password
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Password does not match!');
  }

  const result = await User.create(payload);
  return result;
};

export const authServices = {
  registerIntoDB,
  loginIntoDB,
};
