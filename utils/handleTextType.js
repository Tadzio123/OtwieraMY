import { css } from 'styled-components';

const handleTextType = (type) => {
  switch (type) {
    case 'font-sm-light':
      return css`
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 1.6rem;
      `;
    case 'font-sm-bolt':
      return css`
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 1.6rem;
        letter-spacing: 0.04em;
      `;
    case 'font-sm-light-underline':
      return css`
        font-weight: 300;
        font-size: 1.4rem;
        text-decoration-line: underline;
      `;
    case 'font-sm-regular':
      return css`
        font-style: normal;
        font-weight: normal;
        font-size: 1.4rem;
        line-height: 1.6rem;
        letter-spacing: 0.03em;
      `;
    case 'font-md-regular':
      return css`
        font-weight: normal;
        font-size: 1.8rem;
        line-height: 2.1rem;
        letter-spacing: 0.03em;
      `;
    case 'font-md-light':
      return css`
        font-style: normal;
        font-weight: 300;
        font-size: 1.8rem;
        line-height: 2.1rem;
      `;
    case 'font-lg-medium':
      return css`
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.1rem;
        letter-spacing: 0.03em;
      `;
    default:
      return css`
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 1.6rem;
      `;
  }
};

export default handleTextType;
