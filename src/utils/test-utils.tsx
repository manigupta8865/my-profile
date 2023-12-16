import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom';

import { AppData, AppDataProvider } from '~utils/store/appDataContext';

interface Props {
  children: ReactNode;
  initialAppData?: AppData;
}

function AllTheProviders({ children, initialAppData }: Props) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <AppDataProvider initialAppData={initialAppData}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppDataProvider>
  );
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  return render(ui, {
    wrapper: (props) => {
      return AllTheProviders({ ...props, ...options });
    },
  });
};

/* eslint-disable import/export */
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
/* eslint-enable */
