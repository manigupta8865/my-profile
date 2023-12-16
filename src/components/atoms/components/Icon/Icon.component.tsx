import { Box, BoxProps, Image } from '@chakra-ui/react';
import { ReactElement } from 'react';

export interface Props extends BoxProps {
  svg?: ReactElement;
  src?: string;
  logoAlt?: string;
}

export default function Icon({ logoAlt, svg, src, ...otherProps }: Props) {
  if (src) return <Image src={src} {...otherProps} data-testid="svg-container" alt={logoAlt} />;

  return (
    <Box {...otherProps} data-testid="svg-container">
      {svg}
    </Box>
  );
}
