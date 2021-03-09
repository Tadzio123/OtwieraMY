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
`;

const UserDefaultMenu = () => (
  <>
    <CircleButton id="button-chat" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="chat" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
    <CircleButton id="button-gps" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="gps" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
  </>
);

const UserPinSelectedMenu = () => (
  <>
    <CircleButton id="button-cancel" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="cancel" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
    <CircleButton id="button-gps" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="gps" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
  </>
);

const AdminDefaultMenu = () => (
  <>
    <CircleButton id="button-pin" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="pin" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
    <CircleButton id="button-exit" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="exit" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
  </>
);

const AdminPinSelectedMenu = () => (
  <>
    <CircleButton id="button-cancel" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="cancel" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
    <CircleButton id="button-edit" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="edit" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
    <CircleButton id="button-delete" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="delete" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
    <CircleButton id="button-exit" buttonSize="md" buttonMargin="0 2.5rem 3rem 0">
      <Icon name="exit" color="grey" width="2.5rem" height="2.5rem" />
    </CircleButton>
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
      return <AdminDefaultMenu />;
  }
};

const Menu = ({
  type,
}) => (
  <StyledMenu>
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
