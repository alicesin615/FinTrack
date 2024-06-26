// reducers/index.ts
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { register, login, logout } from '@api/index';
import { user } from '@api/user';
import { keychainReducer } from './authentication';

const rootReducer = combineReducers({
    [register.reducerPath]: register.reducer,
    [login.reducerPath]: login.reducer,
    [logout.reducerPath]: logout.reducer,
    form: formReducer,
    [user.reducerPath]: user.reducer,
    keychain: keychainReducer
});

export default rootReducer;
