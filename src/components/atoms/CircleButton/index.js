import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const handleButtonSize = (buttonSize) => {
  switch (buttonSize) {
    case 'sm':
      return css`
        width: 2.5rem;
        height: 2.5rem;
      `;
    case 'md':
      return css`
        width: 5.5rem;
        height: 5.5rem;
      `;
    default:
      return css`
        width: 2.5rem;
        height: 2.5rem;
      `;
  }
};

const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colorWhite};
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2));
  
  ${({ buttonSize }) => handleButtonSize(buttonSize)}
`;

const CircleButton = ({
  buttonSize, children, ...rest
}) => (
  <StyledButton buttonSize={buttonSize} {...rest}>
    {children}
  </StyledButton>
);

CircleButton.propTypes = {
  buttonSize: PropTypes.oneOf(['sm', 'md']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

CircleButton.defaultProps = {
  buttonSize: 'sm',
};

export default CircleButton;
