import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';
import Typography from 'components/atoms/Typography';
import breakPointSize from 'utils/rwd';

const StyledAlert = styled.div`
    text-transform: uppercase;
    width: 100vw;
    height: 5.4rem;
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ type, theme }) => (type === 'error' && theme.colorDanger)
      || (type === 'success' && theme.colorSuccess)
      || theme.colorDanger
};
    @media ${breakPointSize.mobile} {
      padding: 2rem 2rem;
    }
`;

const Alert = ({
  // eslint-disable-next-line react/prop-types
  style, message, options, close, theme,
}) => (
  // eslint-disable-next-line react/prop-types
  <StyledAlert type={options.type} style={style}>
    <Typography type="font-sm-bolt" color={theme.colorWhite}>{message}</Typography>
    <Icon onClick={close} color="white" name="union" width="1.6rem" height="1.6rem" cursorType="pointer" />
  </StyledAlert>
);
Alert.propTypes = {
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

export default withTheme(Alert);
