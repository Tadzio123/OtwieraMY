import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from 'components/atoms/Logo';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;
  z-index: 2;
`;

const HomePageTemplate = ({ children }) => (
  <Wrapper>
    <Container>
      <Logo />
    </Container>
    {children}
  </Wrapper>
);

HomePageTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
};

export default HomePageTemplate;
