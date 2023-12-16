//libraries
import { VStack, Box, BoxProps } from '@chakra-ui/react';
import Head from 'next/head';
import ContainerComponent from '~components/atoms/components/Container/Container.component';

function DefaultLayout({ children }: { children: React.ReactNode | any }) {
  return (
    <VStack minH="100vh" height="100vh" gap="0px">
      <Head>
        <title>MyProfile</title>
        <link rel="icon" type="image/x-icon" />
      </Head>
      <Box>Header</Box>
      <Box>
        <ContainerComponent>{children}</ContainerComponent>
      </Box>
      <Box>Footer</Box>
    </VStack>
  );
}

export default DefaultLayout;
