import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
