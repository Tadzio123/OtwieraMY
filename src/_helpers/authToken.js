const authToken = () => {
  const token = localStorage.getItem('authToken');

  if (token !== null) {
    return token;
  }
  return {};
};

export default authToken;
