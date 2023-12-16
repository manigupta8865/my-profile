import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontSize: '10pt',
    width: '100%',
    height: '40px',
    color: 'black',
    textTransform: 'uppercase',
    border: '2px solid',
    _focus: {
      boxShadow: 'none',
    },
    borderRadius: 4,
    boxSizing: 'border-box',
    lineHeight: '3',
    fontWeight: '700',
    _hover: {
      _disabled: {
        boxShadow: 'none',
      },
    },
    bgColor: 'transparent',
    borderColor: 'primary',
    bgPosition: 'center',
    _active: {
      bgColor: 'primary',
      bgSize: '100%',
      transition: 'background 0s',
    },
  },
  sizes: {
    xxs: {
      width: '24px',
      height: '24px',
    },
    xs: {
      width: '38px',
      height: '38px',
    },
    xsm: {
      height: '40px',
      width: '102px',
    },
    sm: {
      height: '40px',
      width: '181px',
    },
    md: {
      height: '50px',
      width: '288px',
    },
    full: {
      height: '50px',
      width: 'full',
    },
  },
  variants: {
    tabsButton: {
      _disabled: {
        position: 'relative',
        '&::before': {
          content: '""', // Pseudo-element content
          position: 'absolute',
          top: '50%',
          transform: 'rotate(16deg)',
          width: '100%',
          height: '1px',
          background: 'grey',
        },
        '&::after': {
          content: '""', // Pseudo-element content
          position: 'absolute',
          top: '50%',
          transform: 'rotate(163deg)',
          width: '100%',
          height: '1px',
          background: 'grey',
        },
      },
    },
    tabletable: {
      borderRadius: '0px',
      border: '3px solid',
      borderColor: '#084827',
      color: '#084827',
      fontSize: 'var(--chakra-fontSizes-lg)',
      _hover: {
        bg: '#084827 radial-gradient(circle, transparent 1%, #084827 1%) center/15000%',
        _disabled: {
          bg: 'lightGrey3',
        },
        color: 'white',
      },
      _focus: {
        boxShadow: '0 0 8px var(--chakra-colors-btnPrimaryFocusBoxShadow)',
        bgColor: '#084827',
        color: 'white',
      },
    },
    beefeater: {
      p: '0.6rem 0.5rem 0.3375rem',
      borderRadius: '1.25rem',
      color: '#000000',
      border: '3px solid',
      fontFamily: '"p22-underground-sc", sans-serif',
      fontSize: 'var(--chakra-fontSizes-lg)',
      _hover: {
        bg: '#be6833 radial-gradient(circle, transparent 1%, #943b00 1%) center/15000%',
        _disabled: {
          bg: 'lightGrey3',
        },
      },
      _focus: {
        boxShadow: '0 0 8px var(--chakra-colors-btnPrimaryFocusBoxShadow)',
        bgColor: '#943b00',
      },
    },
    brewersfayre: {
      borderRadius: '0px',
      borderColor: '#ffb92c',
      bg: '#ffb92c',
      fontSize: 'var(--chakra-fontSizes-lg)',
      _hover: {
        color: '#2a2a2a',
        bg: '#ffd277 radial-gradient(circle, transparent 1%, #ffd277 1%) center/15000%',
        _disabled: {
          bg: 'lightGrey3',
        },
      },
      _focus: {
        boxShadow: '0 0 8px var(--chakra-colors-btnPrimaryFocusBoxShadow)',
        bgColor: 'primary',
      },
    },
    cookhouseandpub: {
      borderRadius: '0px',
      borderColor: '#fdbf3',
      bg: 'transparent',
      fontFamily: '"tablet-gothic", sans-serif',
      color: '#fdbf30',
      fontSize: 'var(--chakra-fontSizes-lg)',
      _hover: {
        borderColor: 'white',
        color: 'white',
        bg: '#094025',
        _disabled: {
          bg: 'lightGrey3',
        },
      },
      _focus: {
        boxShadow: '0 0 8px var(--chakra-colors-btnPrimaryFocusBoxShadow)',
        bgColor: 'primary',
      },
    },
    whitbreadinns: {
      borderRadius: '5px',
      bg: '#496f8b',
      border: '#496f8b',
      fontFamily: '"jubilat", arial, serif',
      color: '#ffffff',
      fontSize: 'var(--chakra-fontSizes-lg)',
      _hover: {
        bg: '#304a5a',
        _disabled: {
          bg: 'lightGrey3',
        },
      },
      _focus: {
        boxShadow: '0 0 8px var(--chakra-colors-btnPrimaryFocusBoxShadow)',
        bgColor: 'primary',
      },
    },
    barandblock: {
      borderRadius: '0px',
      bg: 'transparent',
      borderColor: '#e26115',
      borderWidth: '3px',
      fontFamily: '"NexaRustSans-Black", sans-serif',
      color: '#e26115',
      fontSize: 'var(--chakra-fontSizes-lg)',
      _hover: {
        bg: '#e26115',
        color: '#fff',
        _disabled: {
          bg: 'lightGrey3',
        },
      },
      _focus: {
        boxShadow: 'none',
        bgColor: '#e26115',
        color: '#fff',
      },
    },
    whitbreadinnsSubmit: {
      borderColor: '#496f8b',
      bg: 'transparent',
      fontFamily: '"jubilat", arial, serif',
      color: '#496f8b',
      borderRadius: '0px',
      fontSize: 'var(--chakra-fontSizes-lg)',
      _hover: {
        bg: '#496f8b',
        color: '#fff',
        _disabled: {
          bg: 'lightGrey3',
        },
      },
      _focus: {
        boxShadow: '0 0 8px var(--chakra-colors-btnPrimaryFocusBoxShadow)',
        bgColor: 'primary',
        color: '#fff',
      },
    },
    primarycookie: {
      p: '0.6rem 0.5rem 0.3375rem',
      borderRadius: '0',
      outline: '1px solid transparent',
      color: 'primary',
      border: '2px solid',
      fontFamily: '"p22-underground-sc", sans-serif',
      fontSize: 'var(--chakra-fontSizes-lg)',
      bg: '#fff',
      borderColor: 'primary',
      _hover: {
        bg: 'primary',
        color: '#fff',
        _disabled: {
          bg: 'lightGrey3',
        },
      },
      _focus: {
        bg: '#fff',
        color: 'primary',
      },
      _active: {
        bg: 'primary',
        color: '#fff',
      },
    },
    secondarycookie: {
      p: '0.6rem 0.5rem 0.3375rem',
      borderRadius: '0',
      outline: '1px solid transparent',
      color: 'secondary',
      border: '2px solid',
      fontFamily: '"p22-underground-sc", sans-serif',
      fontSize: 'var(--chakra-fontSizes-lg)',
      bg: '#fff',
      borderColor: 'secondary',
      _hover: {
        bg: 'secondary',
        color: '#fff',
        _disabled: {
          bg: 'lightGrey3',
        },
      },
      _focus: {
        bg: '#fff',
        color: 'secondary',
      },
      _active: {
        bg: 'secondary',
        color: '#fff',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'xsm',
  },
};

export default Button;
