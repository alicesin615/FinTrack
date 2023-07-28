import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const register = createApi({
    reducerPath: 'register',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1'
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (apiParams) => ({
                url: '/auth/register',
                method: 'POST',
                body: apiParams
            })
        })
    })
});

export const { useRegisterMutation } = register;
