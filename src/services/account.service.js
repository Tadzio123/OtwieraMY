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

  return fetch(`${CONSTANTS.API_URL}/login`, requestOptions)
    .then((res) => {
      const { status } = res;

      if (status === 200) {
        localStorage.setItem('authToken', res.headers.get('Authorization'));
      }

      return status;
    })
    .catch((err) => err.state);
};

const logout = () => {
  localStorage.removeItem('authToken');
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
