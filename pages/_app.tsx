// scroll bar
import 'simplebar/src/simplebar.css';

// ----------------------------------------------------------------------
import { useEffect, useRef } from 'react';
// next
import Head from 'next/head';
import type { AppProps } from 'next/app';
// theme
import ThemeConfig from 'theme';
// contexts
import { SettingsProvider } from 'contexts/SettingsContext';
// components
import RtlLayout from 'components/RtlLayout';
import Settings from 'components/settings';
import TopProgressBar from 'components/TopProgressBar';
import ThemePrimaryColor from 'components/ThemePrimaryColor';
import { useApollo } from 'server/client';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from 'magic/components/AuthProvider';
import { ModalContextProvider } from 'magic/components/Modal';
import { QueryClient, QueryClientProvider } from 'react-query';
import NotistackProvider from 'components/NotistackProvider';
import { appWithTranslation } from 'next-i18next';
import 'magic/styles/globals.css';

// ----------------------------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ApolloProvider client={apolloClient}>
        <ModalContextProvider>
          <AuthProvider>
            <SettingsProvider>
              <ThemeConfig>
                <ThemePrimaryColor>
                  <RtlLayout>
                    <NotistackProvider>
                      <Settings />
                      <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                      </Head>
                      <TopProgressBar />
                      <Component {...pageProps} />
                    </NotistackProvider>
                  </RtlLayout>
                </ThemePrimaryColor>
              </ThemeConfig>
            </SettingsProvider>
          </AuthProvider>
        </ModalContextProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(MyApp);
