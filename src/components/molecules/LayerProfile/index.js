import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/atoms/Avatar';
import Typography from 'components/atoms/Typography';
// import CircleButton from 'components/atoms/CircleButton';
import Icon from 'components/atoms/Icon';

const LayerProfileContainer = styled.div`
    width: 35.4rem;
    height: 10rem;
    border-radius: 1.1rem;
    background-color: ${({ theme }) => theme.colorWhite};
    box-shadow: 0px .2rem .3rem rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const LayerProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    h4, p{
        margin: 0;
    }
`;

const LayerProfile = () => (
  <>
    <LayerProfileContainer>
      <Avatar />
      <LayerProfileInfo>
        <Typography type="font-md-regular" component="h4">Antoni Kowalski</Typography>
        <Typography type="font-sm-light" component="p">ul. Konieczna 12, 93-356 Łódź</Typography>
        <Typography type="font-sm-light" component="p">501 993 481</Typography>
        <Typography type="font-sm-light" component="p">antoni.kowalski@prawnik.pl</Typography>
      </LayerProfileInfo>
      <Icon name="pencil" color="yellow" width="2rem" height="2rem" />
      <Icon name="union" color="red" width="2rem" height="2rem" />
    </LayerProfileContainer>
  </>
);

export default LayerProfile;
