import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const handleButtonSize = (buttonSize) => {
  switch (buttonSize) {
    case 'sm':
      return css`
        width: 2.5rem;
        height: 2.5rem;
        
        & > img{
          
        }
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
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colorWhite};
  ${({ buttonSize }) => handleButtonSize(buttonSize)}
`;

const Icon = styled.div`

`;

const CircleButton = ({
  buttonSize, iconName, ...rest
}) => {
  const url = `assets/icons/${iconName}.svg`;

  return (
    <StyledButton buttonSize={buttonSize} {...rest}>
      <img src={url} />
    </StyledButton>
  );
};

CircleButton.propTypes = {
  buttonSize: PropTypes.oneOf(['sm', 'md']),
};

CircleButton.defaultProps = {
  buttonSize: 'sm',
};

export default CircleButton;
