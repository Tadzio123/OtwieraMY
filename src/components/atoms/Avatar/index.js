import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  background: url(assets/img/avatar.png) 0 0 no-repeat;
  background-size: 100%;
`;

const Avatar = () => (
  <StyledAvatar />
);

export default Avatar;
