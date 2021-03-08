import React from 'react';
import Map from 'components/organisms/Map';
import { withRouter } from 'react-router-dom';
import Menu from 'components/molecules/Menu';

const HomePage = () => (
  <>
    <Map />
    <Menu />
  </>
);

export default withRouter(HomePage);
