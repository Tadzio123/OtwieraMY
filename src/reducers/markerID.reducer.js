import CONSTANTS from 'utils/constants';

const initialState = {
  selectedMarkerID: null,
};

const markerIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ACTIVE_MARKER_ID:
      return {
        selectedMarkerID: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default markerIDReducer;
