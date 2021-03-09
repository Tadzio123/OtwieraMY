import React, { useEffect, useState } from 'react';
import Map from 'components/organisms/Map';
import { withRouter } from 'react-router-dom';

const HomePage = () => {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      setUserLogged(true);
    }
  }, []);

  return (
    <>
      <Map userLogged={userLogged} />
    </>
  );
};

export default withRouter(HomePage);
