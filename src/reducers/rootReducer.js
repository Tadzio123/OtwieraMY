import { combineReducers } from 'redux';
import markerIDReducer from 'reducers/markerID.reducer';
import markerDataReducer from 'reducers/markerData.reducer';
import userLocationReducer from 'reducers/userLocation.reduer';

const rootReducer = combineReducers({
  markerID: markerIDReducer,
  markerData: markerDataReducer,
  userLocation: userLocationReducer,
});

export default rootReducer;
