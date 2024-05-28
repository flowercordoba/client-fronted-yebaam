/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { number, object, ObjectSchema, string } from 'yup';

import { IResetPassword } from '../interfaces/auth.interface';
import { ISignInPayload, ISignUpPayload } from '../interfaces/payload.intrfaces';

const loginUserSchema: ObjectSchema<ISignInPayload> = object({
  username: string().required('username is a required field').min(4, 'username must be at least 4 characters'),
  password: string().required('Password is a required field').min(4, 'Password must be at least 4 characters')
});

const registerUserSchema: ObjectSchema<ISignUpPayload> = object({
  password: string().required({ password: 'Password is a required field' }).min(4, { password: 'Password must be at least 4 characters' }),
  email: string().email({ email: 'Email must be valid' }).required({ email: 'Email is a required field' }),
  username: string().required({ firstname: 'Username name is a required field' }),
  lastname: string().required({ lastname: 'Last name is a required field' }),
  birthdate: object({
    day: number()
      .required({ day: 'Day is a required field' })
      .min(1, { day: 'Day must be at least 1' })
      .max(31, { day: 'Day cannot be more than 31' }),
    month: string().required({ month: 'Month is a required field' }),
    year: number()
      .required({ year: 'Year is a required field' })
      .min(1900, { year: 'Year must be at least 1900' })
      .max(new Date().getFullYear(), { year: `Year cannot be more than ${new Date().getFullYear()}` })
  }).required(),
  gender: string().required({ gender: 'Gender is a required field' }),
  pronoun: string(),
  optionalGender: string()
});

const resetPasswordSchema: ObjectSchema<IResetPassword> = object({
  password: string().required('Password is a required field').min(4, 'Password is a required field'),
  confirmPassword: string().required('Confirm password is a required field').min(4, 'Password is a required field')
});

export { loginUserSchema, registerUserSchema, resetPasswordSchema };
