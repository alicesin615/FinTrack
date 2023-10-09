// reducers/index.ts
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { register, login } from '@api/index';
import { user } from '@api/user';
import { keychainSlice } from './authentication';

const rootReducer = combineReducers({
    [register.reducerPath]: register.reducer,
    [login.reducerPath]: login.reducer,
    form: formReducer,
    [user.reducerPath]: user.reducer,
    keychain: keychainSlice
});

export default rootReducer;
