import React from 'react';
import Map from 'components/organisms/Map';
import { withRouter } from 'react-router-dom';

const HomePage = () => (
  <>
    <Map />
  </>
);

export default withRouter(HomePage);
