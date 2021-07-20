// scroll bar
import 'simplebar/src/simplebar.css';

// ----------------------------------------------------------------------
import { useEffect, useRef } from 'react';
// next
import Head from 'next/head';
import type { AppProps } from 'next/app';
// theme
import ThemeConfig from 'src/theme';
// contexts
import { SettingsProvider } from 'src/contexts/SettingsContext';
// components
import RtlLayout from 'src/components/RtlLayout';
import Settings from 'src/components/settings';
import TopProgressBar from 'src/components/TopProgressBar';
import ThemePrimaryColor from 'src/components/ThemePrimaryColor';
import { useApollo } from 'src/server/client';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from 'src/magic/components/AuthProvider';
import { ModalContextProvider } from 'src/magic/components/Modal';
import { QueryClient, QueryClientProvider } from 'react-query';

// ----------------------------------------------------------------------

export default function MyApp({ Component, pageProps }: AppProps) {
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
                    <Settings />
                    <Head>
                      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    </Head>
                    <TopProgressBar />
                    <Component {...pageProps} />
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
