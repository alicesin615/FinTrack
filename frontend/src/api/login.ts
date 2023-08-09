import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginRequestParams } from '@models/apiRequest.model';
interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export const login = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1'
    }),

    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequestParams | {}>({
            query: (apiParams) => ({
                url: '/auth/authenticate',
                method: 'POST',
                body: apiParams
            })
        })
    })
});

export const { useLoginMutation } = login;
