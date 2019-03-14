import css from 'styled-jsx/css';

const styles = css.global`
  html, body, #__next {
    height: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export default styles;
