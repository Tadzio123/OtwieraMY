import CONSTANTS from 'utils/constants';

const initialState = {
  selectedMarkerData: null,
};

const markerDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIVE_MARKER_DATA:
      return {
        selectedMarkerData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default markerDataReducer;
