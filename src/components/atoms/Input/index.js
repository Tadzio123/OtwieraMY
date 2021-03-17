import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import handleTextType from 'utils/handleTextType';

const StyledContainer = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  padding: .3rem;
  position: absolute;
  transition: .3s;
  left: 4%;
  top: -15%;
  font-size: 1rem;
  background-color: white;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.8rem 1.3rem;

  ${() => handleTextType('font-sm-light')};

  outline: none;
  border: 1px solid ${({ theme, error }) => (error ? theme.colorDanger : theme.colorGray40)};
  border-radius: .5rem;

  +label {
    color: ${({ theme, error }) => (error ? theme.colorDanger : theme.colorGray40)};
  }
  
  &:focus,
  &:active {
    border: 1px solid ${({ theme, error }) => (error ? theme.colorDanger : theme.colorPrimary)};
    color: ${({ theme }) => theme.colorBlack};
  }

  &:focus+label,
  &:active+label {
    color: ${({ theme, error }) => (error ? theme.colorDanger : theme.colorPrimary)};
  }

  &:placeholder-shown+label {
    left: 4.4%;
    top: 30%;
    font-size: 1.4rem;
  }
`;

// eslint-disable-next-line react/prop-types
const Input = ({
  error,
  id,
  placeholder,
  ...rest
}) => (
  <StyledContainer>
    <StyledInput placeholder=" " error={error} id={id} {...rest} />
    <StyledLabel htmlFor={id}>{placeholder}</StyledLabel>
  </StyledContainer>
);

Input.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.bool,
  ]),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  error: false,
};

export default Input;
