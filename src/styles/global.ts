import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary:      #00A1FE;
    --primaryDark:  #283CA5;
    --secundary:    #212121;
    --success:      #43A047;
    --danger:       #E53935;
    --warning:      #FFB300;
    --title:        #363F5F;
    --text:         #969CB2;
    --shape:        #FFFFFF;
    --background:   #e5e5e5;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background-color: var(--background) ;
    -webkit-font-smoothing: antialiased;
  }
  border-style, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
