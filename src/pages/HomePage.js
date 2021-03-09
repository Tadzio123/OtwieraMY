import React from 'react';
import Map from 'components/organisms/Map';
import Menu from 'components/molecules/Menu';
import { withRouter } from 'react-router-dom';

const HomePage = () => (
  <>
    <Map />
    <Menu />
  </>
);

export default withRouter(HomePage);
