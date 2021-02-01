import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/atoms/Avatar';
import Typography from 'components/atoms/Typography';
import Icon from 'components/atoms/Icon';
import { useThemeContext } from 'context/useThemeContext';
import CircleButton from 'components/atoms/CircleButton';

const LayerProfileContainer = styled.div`
    width: 35.4rem;
    height: 10rem;
    border-radius: 1.1rem;
    background-color: ${({ theme }) => theme.colorWhite};
    box-shadow: 0 .2rem .3rem rgba(0, 0, 0, 0.2);
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

const LayerProfile = () => {
  const theme = useThemeContext();

  return (
    <LayerProfileContainer>
      <Avatar />
      <LayerProfileInfo>
        <Typography type="font-md-regular" component="h1">Antoni Kowalski</Typography>
        <Typography type="font-sm-light" component="p" color={theme.colorGray40}>ul. Konieczna 12, 93-356 Łódź</Typography>
        <Typography type="font-sm-light" component="p" color={theme.colorGray40}>501 993 481</Typography>
        <Typography type="font-sm-light" component="p" color={theme.colorGray40}>antoni.kowalski@prawnik.pl</Typography>
      </LayerProfileInfo>
      <CircleButton buttonSize="sm" onClick={() => console.log('hello')}>
        <Icon name="pencil" color="green" />
      </CircleButton>
      <CircleButton>
        <Icon name="union" color="red" />
      </CircleButton>
    </LayerProfileContainer>
  );
};

export default LayerProfile;
