// reducers/index.ts
import { combineReducers } from 'redux';
import { registerSlice } from './authentication';
const rootReducer = combineReducers({
    register: registerSlice
});

export default rootReducer;
