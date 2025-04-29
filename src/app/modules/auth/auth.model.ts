import { model, Schema } from 'mongoose';
import { IUsers, UserModel } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<IUsers>({
  name: { type: String, required: [true, 'Name is required'] },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: 0,
  },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  phone: {
    type: String,
    trim: true,
    match: [/^\+?[0-9]{10,15}$/, 'Invalid phone number'],
    required: true,
  },
  profileImage: { type: String, required: false },
  address: { type: String, required: [true, 'Address is required'] },
  city: { type: String, required: [true, 'City is required'] },
  country: { type: String, required: [true, 'Country is required'] },
  isDeleted: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
});

// create pre hooks
userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// create static method
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
  planTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(planTextPassword, hashedPassword);
};

export const User = model<IUsers, UserModel>('User', userSchema);
