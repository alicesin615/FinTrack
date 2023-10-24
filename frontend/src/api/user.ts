import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '@models/user.model';
import { BASE_URL } from '@constants/apiConstants';

const prepareHeaders = (headers: Headers, { getState }) => {
    // Get the access token from the Redux store
    const state = getState();
    const accessToken = state.login?.data?.accessToken;
    // Add the access token to the Authorization header
    if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return;
};

export const user = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders
    }),

    endpoints: (builder) => ({
        getLoggedinUser: builder.query<User, void>({
            query: () => ({
                url: '/user',
                method: 'GET'
            })
        })
    })
});

export const { useGetLoggedinUserQuery } = user;
