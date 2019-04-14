import css from 'styled-jsx/css';

import { rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input-container {
    max-width: ${sizes.maxContentWidth}px;
    width: 100%;
    margin-bottom: ${rhythm.vt}px;
  }

  .footer-text-container {
    margin-bottom: ${rhythm.vt}px;
  }
`;

export default styles;
