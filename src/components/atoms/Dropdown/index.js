import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon';

const Container = styled.div`
    display: inline-block;
`;

const StyledDropdownButton = styled.button`
    width: 8.9rem;
    height: 4.8rem;
    font-size: 1.4rem;
    border: 0.1rem solid ${({ theme }) => theme.colorBlack};
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colorWhite};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    outline: none;
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.colorGray10};
    }
`;

const StyledDropdown = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: .5rem;
    background: ${({ theme }) => theme.colorWhite};
    box-shadow: 0px .2rem .3rem rgba(0, 0, 0, 0.2);
    display: ${({ isOpen }) => (isOpen ? 'inline-block' : 'none')};
    overflow: hidden;
    &:hover {
        background: ${({ theme }) => theme.colorGray10};
    }
`;

const StyledDropdownEl = styled.li`
    width: 8.9rem;
    height: 4.8rem;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: ${({ theme }) => theme.colorWhite};
    cursor: pointer;
    &:hover {
        background: ${({ theme }) => theme.colorGray10};
    }
`;

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(5);

  const handleButtonClick = () => {
    setOpen(!open);
  };
  const handleDropdownSelect = (e) => {
    setValue(e.target.value);
    setOpen(false);
  };

  return (
    <Container>
      <StyledDropdownButton onClick={handleButtonClick}>
        +
        {value}
        km
        <Icon name="arrowDown" color="black" width="1rem" height="1rem" />
      </StyledDropdownButton>
      <StyledDropdown isOpen={open}>
        <StyledDropdownEl value={5} onClick={(e) => handleDropdownSelect(e)}>+5 km</StyledDropdownEl>
        <StyledDropdownEl value={10} onClick={(e) => handleDropdownSelect(e)}>+10 km</StyledDropdownEl>
        <StyledDropdownEl value={15} onClick={(e) => handleDropdownSelect(e)}>+15 km</StyledDropdownEl>
        <StyledDropdownEl value={30} onClick={(e) => handleDropdownSelect(e)}>+30 km</StyledDropdownEl>
        <StyledDropdownEl value={60} onClick={(e) => handleDropdownSelect(e)}>+60 km</StyledDropdownEl>
        <StyledDropdownEl value={100} onClick={(e) => handleDropdownSelect(e)}>+100 km</StyledDropdownEl>
      </StyledDropdown>
    </Container>
  );
};

export default Dropdown;
