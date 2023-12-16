export const getCookie = (cookieName: string) => {
  let val = null;
  try {
    // Checking client-side (browser), before accessing document.cookie
    if (typeof document !== 'undefined') {
      val = document?.cookie
        ?.split('; ')
        ?.find?.((row) => row?.startsWith?.(cookieName))
        ?.split('=')[1];
    }
  } catch (e) {
    return e;
  }
  return val;
};

export const setCookie = (
  name: string,
  value: string | boolean | number | null | undefined,
  time: number,
  secure: boolean,
  path = '/en-gb',
  overrideDomain = 'www.'
) => {
  let expires = '';
  if (time) {
    const d = new Date();
    // Sets to minutes
    d.setTime(d.getTime() + time * 60 * 1000);
    expires = `expires=${d.toUTCString()}`;
  }

  const cookiePath = `path=${path}`;
  const domain = `domain=${window.location.hostname.replace('www.', overrideDomain)}`;
  const security = `secure=${secure}`;

  // Check if we are running on the client-side (browser) before setting the cookie
  if (typeof window !== 'undefined') {
    document.cookie = `${name}=${value};${expires};${cookiePath};${domain};${security}`;
  }
};

export const deleteCookie = (cookieName: string) => {
  const expires = 'expires=Thu, 01 Jan 1970 00:00:01 GMT';
  const path = 'path=/';
  const domain = `${'domain='}${window.location.hostname}`;
  document.cookie = `${cookieName}=;${expires};${path};${domain}`;
};
