import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import handleTextType from 'utils/handleTextType';

// eslint-disable-next-line consistent-return
const renderTypography = (type, component, color, children) => {
  if (component === 'h1') {
    const StyledH1 = styled.h1`
      ${() => handleTextType(type, color)};
      color: ${color};  
    `;
    return <StyledH1>{children}</StyledH1>;
  } if (component === 'h2') {
    const StyledH2 = styled.h2`
      ${() => handleTextType(type, color)};
      color: ${color};  
    `;
    return <StyledH2>{children}</StyledH2>;
  } if (component === 'h3') {
    const StyledH3 = styled.h3`
      ${() => handleTextType(type, color)};
      color: ${color};        
    `;
    return <StyledH3>{children}</StyledH3>;
  } if (component === 'h4') {
    const StyledH4 = styled.h4`
      ${() => handleTextType(type, color)};
      color: ${color};      
    `;
    return <StyledH4>{children}</StyledH4>;
  } if (component === 'h5') {
    const StyledH5 = styled.h5`
      ${() => handleTextType(type, color)};
      color: ${color};      
    `;
    return <StyledH5>{children}</StyledH5>;
  } if (component === 'h6') {
    const StyledH6 = styled.h6`
      ${() => handleTextType(type, color)};
      color: ${color};      
    `;
    return <StyledH6>{children}</StyledH6>;
  } if (component === 'p') {
    const StyledParagraph = styled.p`
      ${() => handleTextType(type, color)};
      color: ${color};      
    `;
    return <StyledParagraph>{children}</StyledParagraph>;
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
