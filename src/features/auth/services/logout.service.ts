/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from 'src/store/api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Otros endpoints
    logout: build.mutation<any, void>({
      query() {
        return {
          url: '/signout',
          method: 'GET' // Asegúrate de que no se está intentando enviar un cuerpo con GET
        };
      }
    }),
    getLoggedInUser: build.query<any, void>({
      query: () => 'auth/logged-in-user'
    }),
    removeLoggedInUser: build.mutation<any, string>({
      query(username: string) {
        return {
          url: `auth/logged-in-user/${username}`,
          method: 'DELETE'
        };
      }
    })
  })
});

export const { useLogoutMutation } = authApi;
