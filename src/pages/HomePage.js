import React from 'react';
import Map from 'components/organisms/Map';
import Alert from 'components/molecules/Alerts';

const HomePage = () => (
  <>
    <Alert type="success" message="Nieznany błąd" />
    <Map />
  </>
);

export default HomePage;
