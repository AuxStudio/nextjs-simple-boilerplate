import css from 'styled-jsx/css'; // eslint-disable-line

import { styleConstants } from '../../../config';

const { colors } = styleConstants;

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
