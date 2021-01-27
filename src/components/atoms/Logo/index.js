import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLogo = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  
  background: url("assets/img/logo.svg");
`;

const Logo = ({ width, height }) => <StyledLogo width={width} height={height} />;

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Logo.defaultProps = {
  width: '12.5rem',
  height: '4.4rem',
};

export default Logo;
