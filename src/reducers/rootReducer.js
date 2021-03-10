import { combineReducers } from 'redux';
import markerIDReducer from 'reducers/markerID.reducer';
import markerDataReducer from 'reducers/markerData.reducer';

const rootReducer = combineReducers({
  markerID: markerIDReducer,
  markerData: markerDataReducer,
});

export default rootReducer;
