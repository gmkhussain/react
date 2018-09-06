/** Combine endpoint file **/
import my_reducer from './my_reducer';

import { combineReducers } from 'redux';

export default combineReducers({
    rootReducer: my_reducer
})