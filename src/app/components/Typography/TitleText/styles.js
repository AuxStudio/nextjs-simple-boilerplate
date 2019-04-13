import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../static/styleConstants';

const styles = css`
  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    color: ${colors.black};
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export default styles;
