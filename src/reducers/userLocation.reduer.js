import CONSTANTS from 'utils/constants';

const initialState = {
  userLocationData: null,
};

const userLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.USER_LOCATION:
      return {
        userLocationData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userLocationReducer;
