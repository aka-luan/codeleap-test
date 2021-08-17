import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    :root {
    --gray: #777777;
    --black: #000000;

    --border: #cccccc;
    --shape: #ffffff;
    --background: #dddddd;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px a partir do padrão (16px)
    }
    @media(max-width: 720px) {
      font-size: 87.5% ; // 14px
    }
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--background);
    -webkit-font-smoothing: antialiased;    
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    max-width: 600px;
    background: var(--shape);
    padding: 1rem;
    position: relative;
  }

`;