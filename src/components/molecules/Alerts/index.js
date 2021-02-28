import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';
import Typography from 'components/atoms/Typography';
// import { useThemeContext } from 'context/useThemeContext';

const StyledAlert = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom:0;
    left:0;
    z-index: 99;
    background: ${({ type, theme }) => (type === 'failure' && theme.colorDanger)
      || (type === 'success' && theme.colorSuccess)
      || theme.colorDanger
};

`;

const Alert = ({ type, message, theme }) => (
  <StyledAlert type={type}>
    <Typography type="font-sm-bold" color={theme.colorWhite}>{message}</Typography>
    <Icon color="white" name="union" width="1.6rem" height="1.6rem" />
  </StyledAlert>
);
Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'failure']),
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  theme: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

Alert.defaultProps = {
  type: 'failure',
};

export default withTheme(Alert);
