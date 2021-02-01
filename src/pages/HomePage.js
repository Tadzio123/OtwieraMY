import React from 'react';
import SwitchedButton from 'components/molecules/SwitchedButton';
import Nav from 'components/atoms/Nav';
import LayerProfile from 'components/molecules/LayerProfile';
import Dropdown from 'components/atoms/Dropdown';

const HomePage = () => (
  <>
    <Nav>
      <SwitchedButton firstButtonText="Mapa" firstButtonFunc={() => {}} secondButtonText="Prawnicy" secondButtonFunc={() => {}} />
    </Nav>
    <Dropdown />
  </>
);

export default HomePage;
