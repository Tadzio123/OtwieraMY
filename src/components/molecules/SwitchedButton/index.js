import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import handleTextType from 'utils/handleTextType';

const Container = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: 50%;
  padding-top: 1.6rem;
  padding-bottom: 1.4rem;
  
  background-color: ${({ theme }) => theme.colorWhite};
  border-bottom: .2rem solid ${({ theme }) => theme.colorWhite}; 
  
  ${() => handleTextType('font-sm-regular')};
  
  text-transform: uppercase;
  text-align: center;
  
  color: ${({ theme }) => theme.colorGray40};
  
  cursor: pointer;
  
  ${({ active, theme }) => active && css`
    border-bottom: 2px solid ${theme.colorPrimaryDark};
    color: ${theme.colorPrimaryDark};
  `}
`;

const SwitchedButton = ({
  firstButtonText, secondButtonText, firstButtonFunc, secondButtonFunc,
}) => {
  useEffect(() => {
    firstButtonFunc();
  }, []);

  const [activeTabID, setActiveTabID] = useState('switched-button-1');

  const setToActive = (e) => {
    const tabClickedID = e.target.id;

    if (tabClickedID !== activeTabID) {
      setActiveTabID(tabClickedID);
    }
  };

  return (
    <Container>
      <Button onClick={(e) => { setToActive(e); firstButtonFunc(); }} id="switched-button-1" active={activeTabID === 'switched-button-1'}>
        {firstButtonText}
      </Button>
      <Button onClick={(e) => { setToActive(e); secondButtonFunc(); }} id="switched-button-2" active={activeTabID === 'switched-button-2'}>
        {secondButtonText}
      </Button>
    </Container>
  );
};

SwitchedButton.propTypes = {
  firstButtonText: PropTypes.string.isRequired,
  secondButtonText: PropTypes.string.isRequired,
  firstButtonFunc: PropTypes.func.isRequired,
  secondButtonFunc: PropTypes.func.isRequired,
};

export default SwitchedButton;
