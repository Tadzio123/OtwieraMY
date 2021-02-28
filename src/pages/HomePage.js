import React from 'react';
import Map from 'components/organisms/Map';
import { withRouter } from 'react-router-dom';

const HomePage = () => (
  <>
    <Alert type="success" message="Nieznany błąd" />
    <Map />
  </>
);

export default withRouter(HomePage);
