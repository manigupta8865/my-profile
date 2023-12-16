//libraries
import { ReactElement, ReactNode } from 'react';
import { AppProps } from 'next/app';

//custom import
import { AppDataProvider } from '~utils/store/appDataContext';
import { CustomThemeProvider } from '~utils/providers/CustomThemeProvider';
import DefaultLayout from '~components/organisms/DefaultLayouts/DefaultLayout';
import ErrorBoundary from '~components/organisms/ErrorBoundary/ErrorBoundary.component';
import Fonts from '~components/atoms/theme/components/Fonts';
import ScriptsEmbed from '~components/organisms/common/ScriptsEmbed/ScriptsEmbed.component';

type NextPageWithLayout = any & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export type Props = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, ...pageProps }: Props) {
  const getLayout =
    Component.getLayout ||
    ((page: any) => (
      <DefaultLayout>
        <ErrorBoundary>{page}</ErrorBoundary>
      </DefaultLayout>
    ));

  return (
    <AppDataProvider>
      <CustomThemeProvider>
        <Fonts />
        {getLayout(<Component {...pageProps} />)}
      </CustomThemeProvider>
      <ScriptsEmbed />
    </AppDataProvider>
  );
}
export default MyApp;
