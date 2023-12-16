import Button from './components/Button';
import { colors } from './foundation/colors';
import { breakpoints } from './foundation/breakpoints';
import { typography } from './foundation/typography';
import { space } from './foundation/space';

import styles from './styles';
import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles,
  colors,
  breakpoints,
  fonts: typography.fonts,
  fontSizes: typography.fontSizes,
  lineHeights: typography.lineHeights,
  space,
  components: {
    Button,
  },
};
export default extendTheme(theme);
