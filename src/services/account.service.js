import CONSTANTS from 'utils/constants';

const login = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  };

  return fetch(`${CONSTANTS.API_URL}/login`, requestOptions);
};

const logout = (authToken) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken(),
    },
  };

  return fetch(`${CONSTANTS.API_URL}/invalid_token`, requestOptions);
};

const changePassword = (oldPassword, newPassword, authToken) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken(),
    },
  };

  return fetch(`${CONSTANTS.API_URL}/user/changePassword/?oldpassword=${oldPassword}&password=${newPassword}`, requestOptions);
};

const accountService = {
  login,
  logout,
  changePassword,
};

export default accountService;
