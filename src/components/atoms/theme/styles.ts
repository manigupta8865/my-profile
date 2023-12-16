const overrides = {
  global: {
    '.header-container': {
      flexDirection: 'column',
      position: 'relative',
      zIndex: '1000',
      bg: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      px: '20px',
      height: { base: 'fit-content', md: '70px', mobile: 'auto' },
    },
    '.header-container-cookhouseandpub': {
      bg: '#094025',
    },
    '.header-container-whitbreadinns': {
      bg: '#e8e4e1',
    },
    '.logo-container a': {
      display: 'block',
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: 'center',
      backgroundSize: '100%',
      height: '3.4875rem',
      width: '6.25rem',
    },
    '.header-container-beefeater .logo-container-beefeater a': {
      height: '3.4875rem',
      width: '6.25rem',
    },
    '.header-container-cookhouseandpub .logo-container-cookhouseandpub a': {
      width: '145px',
    },
    '.header-container-brewersfayre .logo-container-brewersfayre a': {
      width: '5.0625rem',
      height: '5.0625rem',
      marginTop: '1.5rem',
    },
    '.header-container-brewersfayre .logo-container-brewersfayre.logo-container-mobile a': {
      width: '3.5rem',
      height: '3.5rem',
      marginTop: '0',
    },
    '.header-container-whitbreadinns .logo-container-whitbreadinns a': {
      width: '45px',
    },
    '.header-container-tabletable .logo-container-tabletable a': {
      width: '4.1875rem',
      height: '4.6875rem',
      marginTop: '1.5rem',
    },
    '.header-container-tabletable .logo-container-tabletable.logo-container-mobile a': {
      width: '3.225rem',
      height: '3.925rem',
      marginTop: '0',
    },
    '.header-container-barandblock .logo-container-barandblock a': {
      width: '145px',
    },
    '.form-heading-title': {
      fontFamily: '"azo-sans-web", sans-serif',
      textTransform: 'none',
      m: '0',
      my: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#61375a',
      textAlign: 'center',
      fontSize: '2rem',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '40px',
    },
    '.beefeater-form-heading-title': {
      fontFamily: '"azo-sans-web", sans-serif',
      color: '#fff',
    },
    '.tabletable-form-heading-title': {
      fontFamily: '"tablet-gothic-condensed", sans-serif',
      color: '#fff',
    },
    '.cookhouseandpub-form-heading-title': {
      fontFamily: '"tablet-gothic", sans-serif',
      color: '#fff',
    },
    '.whitbreadinns-form-heading-title': {
      fontFamily: '"rucksack", sans-serif',
      color: '#fff',
    },
    '.barandblock-form-heading-title': {
      fontFamily: '"NexaRustSans-Black", sans-serif',
      color: '#fff',
    },
    '.brewersfayre-form-heading-title': {
      fontFamily: '"azo-sans-web", sans-serif',
      color: '#fff',
    },
    '.back-to-home': {
      marginTop: '16px',
      fontSize: '0.875rem',
      lineHeight: '1.3125rem',
      color: 'primary',
      textDecoration: 'underline',
      fontFamily: '"azo-sans-web", sans-serif',
    },
    '.footer-container': {
      backgroundColor: '#2a3236',
      color: '#fff',
      fontSize: '14px',
    },
    '.footer-container-tabletable': {
      backgroundColor: '#084827',
      color: '#fff',
    },
    '.footer-container-whitbreadinns .footer-nav-links': {
      backgroundColor: '#f3f1f0',
      color: '#2b2e32',
    },
    '.footer-container-whitbreadinns .footer-nav-links svg': {
      fill: '#2b2e32',
    },
    '.footer-container-whitbreadinns .footer-copyright': {
      backgroundColor: '#fff',
      color: '#3f4650',
    },
    '.footer-container-cookhouseandpub .footer-nav-links': {
      backgroundColor: '#f4ede9',
      color: '#222222',
    },
    '.footer-container-cookhouseandpub .footer-nav-links svg': {
      fill: '#094025',
    },
    '.footer-container-cookhouseandpub .footer-copyright': {
      backgroundColor: '#fff',
      color: '#094025',
    },

    '.header-container .header-menu-button': {
      backgroundColor: '#f5f3f3',
      borderRadius: 0,
      borderBottom: '1px solid #ccc',
    },
    '.header-container .header-menu-button-whitbreadinns': {
      color: '#304a5a',
    },
    '.header-container .header-menu-button-brewersfayre': {
      color: '#a32435',
    },
    '.header-container .header-menu-button-cookhouseandpub': {
      color: '#222222',
    },
  },
};

export default overrides;
