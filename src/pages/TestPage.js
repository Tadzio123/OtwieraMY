import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withAlert } from 'react-alert';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line react/prop-types
const TestPage = ({ alert }) => {
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    alert.success('Working');
  });

  return (
    <Container>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={() => {
          // eslint-disable-next-line react/prop-types
          alert.error('Coś poszło nie tak');
        }}
      >
        Show Alert
      </button>
    </Container>
  );
};

export default withAlert()(TestPage);
