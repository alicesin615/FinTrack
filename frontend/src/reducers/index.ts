// reducers/index.ts
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { register, login } from '@api/index';

const rootReducer = combineReducers({
    [register.reducerPath]: register.reducer,
    [login.reducerPath]: login.reducer,
    form: formReducer
});

export default rootReducer;
