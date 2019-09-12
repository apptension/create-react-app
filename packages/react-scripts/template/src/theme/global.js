import { createGlobalStyle } from 'styled-components';
import { Font } from './theme.constants';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${Font.PRIMARY};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
