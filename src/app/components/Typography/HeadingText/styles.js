import css from 'styled-jsx/css'; // eslint-disable-line

import { styleConstants } from '../../../config';

const { colors } = styleConstants;

const styles = css`
  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 16px;
    color: ${colors.grey};
  }
`;

export default styles;
