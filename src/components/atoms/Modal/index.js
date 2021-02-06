import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import handleTextType from 'utils/handleTextType';

const StyledContainer = styled.div`
  position: relative;
  `;

  const Modal = ({
    error,
    id,
    placeholder,
    ...rest
  }) => (
    <StyledContainer>
      {/* <StyledInput placeholder=" " error={error} id={id} {...rest} />
      <StyledLabel htmlFor={id}>{placeholder}</StyledLabel> */}
    </StyledContainer>
  );

  export default Modal
