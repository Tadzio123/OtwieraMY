import CONSTANTS from 'utils/constants';

const userLogin = () => ({
  type: CONSTANTS.USER_LOGIN,
});

const userLogout = () => ({
  type: CONSTANTS.USER_LOGOUT,
});

const userActions = {
  login: userLogin,
  logout: userLogout,
};

export default userActions;
