import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Icon imports are sorted alphabetically
import { ReactComponent as CancelIcon } from 'assets/icons/cancel.svg';
import { ReactComponent as ChatIcon } from 'assets/icons/chat.svg';
import { ReactComponent as ConfirmIcon } from 'assets/icons/confirm.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { ReactComponent as PencilIcon } from 'assets/icons/edit.svg';
import { ReactComponent as ExitIcon } from 'assets/icons/exit.svg';
import { ReactComponent as GPSIcon } from 'assets/icons/gps.svg';
import { ReactComponent as MarkerPrimaryIcon } from 'assets/icons/marker-primary.svg';
import { ReactComponent as MarkerPrimaryActiveIcon } from 'assets/icons/marker-primary-active.svg';
import { ReactComponent as PinIcon } from 'assets/icons/pin.svg';

const handleIconType = (name) => {
  switch (name) {
    case 'cancel':
      return <CancelIcon />;
    case 'chat':
      return <ChatIcon />;
    case 'confirm':
      return <ConfirmIcon />;
    case 'delete':
      return <DeleteIcon />;
    case 'pencil':
      return <PencilIcon />;
    case 'exit':
      return <ExitIcon />;
    case 'gps':
      return <GPSIcon />;
    case 'markerPrimary':
      return <MarkerPrimaryIcon />;
    case 'markerPrimaryActive':
      return <MarkerPrimaryActiveIcon />;
    case 'pin':
      return <PinIcon />;
    default:
      return <PencilIcon />;
  }
};

const StyledIcon = styled.div`
  display: inline-flex;
  align-items:center;

  svg {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    transition: .2s;
  }
  svg path {
    fill: ${({ color }) => color};
    transition: fill 0.2s;
  }
`;

const Icon = ({
  name, color, width, height,
}) => (
  <>
    <StyledIcon color={color} width={width} height={height}>
      {handleIconType(name)}
    </StyledIcon>
  </>
);

Icon.propTypes = {
  name: PropTypes.oneOf(['cancel', 'chat', 'confirm', 'delete', 'pencil', 'exit', 'gps', 'markerPrimary', 'markerPrimaryActive', 'pin']),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  name: 'cancel',
  color: ({ theme }) => theme.colorBlack,
  width: '2rem',
  height: '2rem',
};

export default Icon;
