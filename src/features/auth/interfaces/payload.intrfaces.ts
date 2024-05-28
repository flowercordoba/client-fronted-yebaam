/* eslint-disable prettier/prettier */
export interface IAuthUser {
  profilePublicId: string | null;
  createdAt: Date | null;
  email: string | null;
  emailVerificationToken: string | null;
  emailVerified: boolean | null;
  id: string | null;
  passwordResetExpires: Date | null;
  passwordResetToken: string | null;
  profilePicture: string | null;
  updatedAt: Date | null;
  username: string | null;
  firstName?: string | null;
  lastName?: string | null;
  birthDate?: {
    day: number | null;
    month: string | null;
    year: number | null;
  };
  gender?: string | null;
  pronoun?: string | null;
  optionalGender?: string | null;
}

export interface IAuthDocument extends IAuthUser {
  email: string;
}

export interface IReduxAuthPayload {
  authInfo?: IAuthDocument;
}

export interface IReduxAddAuthUser {
  type: string;
  payload: IReduxAuthPayload;
}

export interface IReduxLogout {
  type: string;
  payload: boolean;
}

export interface ISignInPayload {
  username: string;
  password: string;
}

export interface ISignUpPayload {
  email: string;
  password: string;
  username: string;
  lastname: string;
  birthdate: {
    day: number;
    month: string;
    year: number;
  };
  gender: string;
  pronoun?: string;
  optionalGender?: string;
}
export interface IAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

