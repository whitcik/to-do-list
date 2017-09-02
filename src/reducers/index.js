import { combineReducers } from 'redux';
import toDoList from './toDoListReducer.js';

const rootReducer = combineReducers({
    toDoList: toDoList,
});
export default rootReducer;