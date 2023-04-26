import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import paymentReducer from './reducers/paymentReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  payment: paymentReducer,
});

export default rootReducer;