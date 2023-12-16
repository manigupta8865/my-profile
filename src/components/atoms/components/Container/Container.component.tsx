import { BoxProps, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  containerStyles?: BoxProps;
}

export default function ContainerComponent({ children, containerStyles }: Props) {
  const styles = {
    minW: '18.75rem', // 300px
    maxW: {
      base: 'none',
      mobile: '100%',
      sm: '100%',
      md: 'var(--chakra-space-breakpoint-md)',
      lg: 'var(--chakra-space-breakpoint-lg)',
      xl: 'var(--chakra-space-breakpoint-lg)',
      xxl: 'var(--chakra-space-breakpoint-lg)',
    },
    px: '0',
  };
  return (
    <Container {...styles} {...containerStyles}>
      {children}
    </Container>
  );
}
