import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line consistent-return
const renderTypography = (type, component, color, children) => {
  if (component === 'h1') {
    return <h1 className={type} style={{ color }}>{children}</h1>;
  } if (component === 'h2') {
    return <h2 className={type} style={{ color }}>{children}</h2>;
  } if (component === 'h3') {
    return <h3 className={type} style={{ color }}>{children}</h3>;
  } if (component === 'h4') {
    return <h4 className={type} style={{ color }}>{children}</h4>;
  } if (component === 'h5') {
    return <h5 className={type} style={{ color }}>{children}</h5>;
  } if (component === 'h6') {
    return <h6 className={type} style={{ color }}>{children}</h6>;
  } if (component === 'p') {
    return <p className={type} style={{ color }}>{children}</p>;
  }
};

const Typography = ({
  type, component, color, children,
}) => (
  <>
    {renderTypography(type, component, color, children)}
  </>
);

Typography.propTypes = {
  type: PropTypes.oneOf([
    'font-sm-light',
    'font-sm-bolt',
    'font-sm-light-underline',
    'font-sm-regular',
    'font-md-regular',
    'font-md-light',
    'font-lg-medium',
  ]),
  component: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p',
  ]),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.number,
    PropTypes.object,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

Typography.defaultProps = {
  type: 'font-sm-light',
  component: 'p',
  color: ({ theme }) => theme.colorBlack,
};

export default Typography;
