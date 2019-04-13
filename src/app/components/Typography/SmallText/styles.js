import css from 'styled-jsx/css'; // eslint-disable-line

import { colors } from '../../../static/styles/styleConstants';

const styles = css`
  small {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.grey};
  }

  .white {
    color: white;
  }
`;

export default styles;
