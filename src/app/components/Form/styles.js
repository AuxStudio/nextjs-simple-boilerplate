import css from 'styled-jsx/css';

import { rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: ${sizes.maxContentWidth}px;
    margin: 0 auto;
  }

  .input-container {
    margin-bottom: ${rhythm.vt}px;
    width: 100%;
  }

  .footer-text-container {
    margin-bottom: ${rhythm.vt}px;
  }
`;

export default styles;
