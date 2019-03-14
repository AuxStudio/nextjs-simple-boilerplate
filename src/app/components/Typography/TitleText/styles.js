import css from 'styled-jsx/css'; // eslint-disable-line

import { styleConstants } from '../../../config';

const { colors } = styleConstants;

const styles = css`
  h1 {
    font-family: 'Arial', sans-serif;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.black};
  }
`;

export default styles;
