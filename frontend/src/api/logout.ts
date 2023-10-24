import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@constants/apiConstants';

export const logout = createApi({
    reducerPath: 'logout',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({
        logout: builder.mutation<void, void | {}>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST'
            })
        })
    })
});

export const { useLogoutMutation } = logout;
