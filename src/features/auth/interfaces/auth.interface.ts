/* eslint-disable prettier/prettier */
import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from 'react';
import { ObjectSchema } from 'yup';

import { ISignInPayload, ISignUpPayload } from './payload.intrfaces';

export interface IAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IAuthUser {
  email: string | null;
  bgImageId: string | null;
  bgImageVersion: string | null;
  emailVerificationToken: string | null;
  emailVerified: boolean | null;
  id: number | null;
  passwordResetExpires: Date | null;
  passwordResetToken: null | null;
  profilePicture: string | null;
  updatedAt: Date | null;
  // username: string | null;
  firstName: string | null;
  lastName: string | null;
  birthDate: {
    day: number;
    month: string;
    year: number;
  } | null;
  gender: string | null;
  pronoun: string | null;
  optionalGender: string | null;
}

export interface IAuthDocument {
  id?: number;
  profilePublicId?: string;
  profilePicture?: string;
  emailVerified?: number;
  emailVerificationToken?: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  // Nuevos campos
  firstName?: string;
  lastName?: string;
  birthDate?: {
    day: number;
    month: string;
    year: number;
  };
  gender?: string;
  pronoun?: string;
  optionalGender?: string;
}

export interface IUseAuthSchema {
  schema: ObjectSchema<ISignInPayload | ISignUpPayload | IResetPassword>;
  userInfo: ISignInPayload | ISignUpPayload | IResetPassword;
}

export const AUTH_FETCH_STATUS = {
  IDLE: '',
  SUCCESS: 'success',
  ERROR: 'error'
};

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export interface IHandleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IModalBgProps {
  children?: ReactNode;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  onToggle?: Dispatch<SetStateAction<boolean>>;
  onTogglePassword?: Dispatch<SetStateAction<boolean>>;
}
