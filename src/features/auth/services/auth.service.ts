/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { IResponse } from 'src/features';

import { api } from '../../../store/api';
import { ISignUpPayload } from '../interfaces/payload.intrfaces';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<IResponse, ISignUpPayload>({
      query(body: ISignUpPayload) {
        return {
          url: '/auth/signup',
          method: 'POST',
          body
        };

      },
      invalidatesTags: ['Auth']
    }),
    signIn: build.mutation<any, any>({
      query(body: any) {
        return {
          url: '/auth/signin',
          method: 'POST',
          body
        };
      }
    }),

    resendEmail: build.mutation<any, { userId: number; email: string }>({
      query(data) {
        return {
          url: '/resend-email',
          method: 'POST',
          body: data
        };
      }
    }),
    verifyEmail: build.mutation<any, string>({
      query(token: string) {
        return {
          url: '/auth/verify-email',
          method: 'PUT',
          body: { token }
        };
      }
    }),
    forgotPassword: build.mutation<any, string>({
      query(email: string) {
        return {
          url: '/auth/forgot-password',
          method: 'PUT',
          body: { email }
        };
      }
    }),
    resetPassword: build.mutation<any, { password: string; confirmPassword: string; token: string }>({
      query(data) {
        return {
          url: `/auth/reset-password/${data.token}`,
          method: 'PUT',
          body: data
        };
      }
    }),
    checkCurrentUser: build.query<any, void>({
      query: () => '/auth/currentuser'
    }),
    getLoggedInUser: build.query<any, void>({
      query: () => '/auth/logged-in-user'
    }),
    removeLoggedInUser: build.mutation<any, string>({
      query(username: string) {
        return {
          url: `/auth/logged-in-user/${username}`,
          method: 'DELETE'
        };
      }
    }),

  })
});

export const {
  useCheckCurrentUserQuery,
  useGetLoggedInUserQuery,
  useSignUpMutation,
  useSignInMutation,
  useRemoveLoggedInUserMutation,
  useResendEmailMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation
} = authApi;
