import { Model } from 'mongoose';

export interface IUsers {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  phone: string;
  profileImage?: string;
  address: string;
  city: string;
  country: string;
  isDeleted: boolean;
  isBlocked: boolean;
}

export interface TUserLogin {
  email: string;
  password: string;
}

// create interface for the statick method
export interface UserModel extends Model<IUsers> {
  isUserExistsByEmail(email: string): Promise<IUsers>;
  isPasswordMatched(
    planTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
