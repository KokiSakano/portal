import type { AppProps } from 'next/app';
import { Layout } from '@/components/Common/Layout';
import { Session } from 'next-auth';
import { AppProvider } from '@/provider/app';

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <AppProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
