import css from 'styled-jsx/css';

import { rhythm, sizes } from '../../static/styles/styleConstants';

const styles = css`
  .container {
    position: relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    padding: 64px 0 64px; /* Header and Footer heights */
  }

  .content-container {
    max-width: ${sizes.maxContentWidth}px;
    width: 100%;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 ${rhythm.hz / 2}px;
  }

  .footer-container {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @media (min-width: ${sizes.maxContentWidth}px) {
    .content-container {
      padding: 0;
    }
  }
`;

export default styles;
