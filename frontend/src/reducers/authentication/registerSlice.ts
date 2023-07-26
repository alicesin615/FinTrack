import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: null,
    user: null
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        registerFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {
    actions: { registerStart, registerSuccess, registerFailure },
    reducer: registerReducer
} = registerSlice;
export default registerSlice.reducer;
