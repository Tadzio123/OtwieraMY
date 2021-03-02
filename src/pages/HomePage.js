import React from 'react';
import Map from 'components/organisms/Map';
import { withRouter } from 'react-router-dom';
import Alert from 'components/molecules/Alerts';

const HomePage = () => (
  <>
    <Map />
    <Alert type="success" message="Wow ale super" />
  </>
);

export default withRouter(HomePage);
