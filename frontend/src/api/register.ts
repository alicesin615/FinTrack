import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RegisterRequestParams } from '@models/apiRequest.model';
import { BASE_URL } from '@constants/apiConstants';

interface RegisterResponse {
    accessToken: string;
    refreshToken: string;
}
export const register = createApi({
    reducerPath: 'register',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: (builder) => ({
        register: builder.mutation<
            RegisterResponse,
            RegisterRequestParams | {}
        >({
            query: (apiParams) => ({
                url: '/auth/register',
                method: 'POST',
                body: apiParams
            })
        })
    })
});

export const { useRegisterMutation } = register;
