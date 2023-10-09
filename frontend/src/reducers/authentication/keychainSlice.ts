// keychainSlice.js
import { createSlice } from '@reduxjs/toolkit';

const keychainSlice = createSlice({
    name: 'keychain',
    initialState: {
        data: null,
        isLoading: false,
        error: null
    },
    reducers: {
        fetchKeychainDataStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        fetchKeychainDataSuccess(state, action) {
            state.data = action.payload;
            state.isLoading = false;
        },
        fetchKeychainDataFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {
    fetchKeychainDataStart,
    fetchKeychainDataSuccess,
    fetchKeychainDataFailure
} = keychainSlice.actions;

export default keychainSlice.reducer;
