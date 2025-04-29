import { z } from 'zod';

export const registerValidatoin = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),

    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6, 'Password must be at least 6 characters'),

    role: z.enum(['user', 'admin']).optional().default('user'),

    phone: z
      .string({
        required_error: 'Phone number is required',
      })
      .regex(/^\+?[0-9]{10,15}$/, 'Invalid phone number'),

    profileImage: z.string().url('Invalid image URL').optional(),

    address: z.string({
      required_error: 'Address is required',
    }),

    city: z.string({
      required_error: 'City is required',
    }),

    country: z.string({
      required_error: 'Country is required',
    }),

    isDeleted: z.boolean().optional(),
    isBlocked: z.boolean().optional(),
  }),
});

export const authValidation = {
  registerValidatoin,
};
