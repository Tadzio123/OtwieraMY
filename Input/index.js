import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import handleTextType from 'utils/handleTextType';

const StyledInput = styled.input`
  width: 100%;
  padding: 1.6rem;

  ${() => handleTextType('font-sm-light')};

  outline: none;
  border: 1px solid ${({ theme }) => theme.colorGray40};
  border-radius: .5rem;
  
  &:focus,
  &:active{
    border: 1px solid ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.colorBlack};     
  }
  
  ${({ error }) => error && css`
    border: 1px solid ${({ theme }) => theme.colorDanger};    
    color: ${({ theme }) => theme.colorDanger};     
  `}
`;

// eslint-disable-next-line react/prop-types
const Input = ({ error, ...rest }) => (
  <StyledInput error={error} {...rest} />
);

Input.propTypes = {
  error: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

Input.defaultProps = {
  error: false,
};

export default Input;
