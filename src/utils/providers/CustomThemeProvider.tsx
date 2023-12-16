import { ReactNode, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '~components/atoms/theme';

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [customTheme, setCustomTheme] = useState(theme);

  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};
