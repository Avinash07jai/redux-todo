import { combineReducers } from 'redux';
import { oprationsReducer } from './todo-redux/reducers/operations';

export const rootReducer = combineReducers({
        oprationsReducer,
})