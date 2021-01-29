import React from 'react';
import SwitchedButton from 'components/molecules/SwitchedButton';
import Nav from 'components/atoms/Nav';
import LayerProfile from 'components/molecules/LayerProfile';

const HomePage = () => (
  <>
    <Nav>
      <SwitchedButton firstButtonText="Mapa" firstButtonFunc={() => {}} secondButtonText="Prawnicy" secondButtonFunc={() => {}} />
    </Nav>
    <LayerProfile />
  </>
);

export default HomePage;
