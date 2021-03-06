import { createStore } from 'redux';
import authReducer from 'reducers/auth.reducer';

const store = createStore(authReducer);

export default store;
