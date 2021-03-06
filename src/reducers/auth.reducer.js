import CONSTANTS from 'utils/constants';

const initialState = {
  userLogged: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.USER_LOGIN:
      return {
        ...state,
        userLogged: true,
      };
    case CONSTANTS.USER_LOGOUT:
      return {
        ...state,
        userLogged: false,
      };
    default:
      return {
        state,
      };
  }
};

export default authReducer;
