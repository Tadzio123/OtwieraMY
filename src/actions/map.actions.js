import CONSTANTS from 'utils/constants';

const activeMarkerID = (id) => ({
  type: CONSTANTS.ACTIVE_MARKER_ID,
  payload: id,
});

const activeMarkerData = (data) => ({
  type: CONSTANTS.ACTIVE_MARKER_DATA,
  payload: data,
});

const mapActions = {
  activeMarkerID,
  activeMarkerData,
};

export default mapActions;
