export type TUsers = {
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
};
