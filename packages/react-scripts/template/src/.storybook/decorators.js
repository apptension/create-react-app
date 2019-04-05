import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';


export const withTheme = (mode) => (story) => (
  <ThemeProvider theme={{ mode }}>{story()}</ThemeProvider>
);

export const withStore = (initialState) => (story) => (
  <Provider store={initialState}>
    {story()}
  </Provider>
);
