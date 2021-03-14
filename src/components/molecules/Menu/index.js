import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CircleButton from 'components/atoms/CircleButton';
import Icon from 'components/atoms/Icon';

const StyledMenu = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
  margin-right: 2.5rem;
`;

const StyledCircleButton = styled(CircleButton)`
  margin-bottom: 3rem; 
`;

const UserDefaultMenu = () => (
  <>
    <StyledCircleButton id="button-chat" buttonSize="md">
      <Icon name="chat" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
    <StyledCircleButton id="button-gps" buttonSize="md">
      <Icon name="gps" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
  </>
);

const UserPinSelectedMenu = () => (
  <>
    <StyledCircleButton id="button-cancel" buttonSize="md">
      <Icon name="cancel" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
    <StyledCircleButton id="button-gps" buttonSize="md">
      <Icon name="gps" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
  </>
);

const AdminDefaultMenu = () => (
  <>
    <StyledCircleButton id="button-pin" buttonSize="md">
      <Icon name="pin" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
    <StyledCircleButton id="button-exit" buttonSize="md">
      <Icon name="exit" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
  </>
);

const AdminPinSelectedMenu = () => (
  <>
    <StyledCircleButton id="button-cancel" buttonSize="md">
      <Icon name="cancel" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
    <StyledCircleButton id="button-edit" buttonSize="md">
      <Icon name="edit" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
    <StyledCircleButton id="button-delete" buttonSize="md">
      <Icon name="delete" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
    <StyledCircleButton id="button-exit" buttonSize="md">
      <Icon name="exit" color="grey" width="2.5rem" height="2.5rem" />
    </StyledCircleButton>
  </>
);

const handleMenuType = (type) => {
  switch (type) {
    case 'UserDefault':
      return <UserDefaultMenu />;
    case 'UserSelected':
      return <UserPinSelectedMenu />;
    case 'AdminDefault':
      return <AdminDefaultMenu />;
    case 'AdminSelected':
      return <AdminPinSelectedMenu />;
    default:
      return <UserDefaultMenu />;
  }
};

const Menu = ({
  type,
}) => (
  <StyledMenu id="menu">
    {handleMenuType(type)}
  </StyledMenu>
);

Menu.propTypes = {
  type: PropTypes.oneOf(['UserDefault', 'AdminDefault', 'UserSelected', 'AdminSelected']),
};
Menu.defaultProps = {
  type: 'UserDefault',
};

export default Menu;
