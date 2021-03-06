import CONSTANTS from 'utils/constants';

export const login = () => ({
  type: CONSTANTS.USER_LOGIN,
});

export const logout = () => ({
  type: CONSTANTS.USER_LOGOUT,
});

/*
const userActions = {
  login: userLogin,
  logout: userLogout,
};

export default userActions;
*/
