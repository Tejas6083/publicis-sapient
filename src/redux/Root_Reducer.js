import { combineReducers } from 'redux';
import SpacexReducer  from './spaceX/Reducer';

const rootReducer = combineReducers({
    event: SpacexReducer
})

export default rootReducer;