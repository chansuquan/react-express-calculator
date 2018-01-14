import { combineReducers } from 'redux';
import calculator from 'app/flux/reducers/calculator';


const rootReducer = combineReducers({
  calculator
});

export default rootReducer;