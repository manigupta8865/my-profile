import Script from 'next/script';

export default function ScriptsEmbed() {
  return (
    <>
      <Script
        src="//assets.adobedtm.com/28daaa118553/e23770822d0e/launch-EN7943d379fcb34dbcbe037328bed2399a.min.js"
        strategy="beforeInteractive"
        data-testid="adobe-script"
      ></Script>
      <Script
        src="//cdn.appdynamics.com/adrum/adrum-22.9.0.3923.js"
        strategy="lazyOnload"
        data-testid="appdynamics-script"
      ></Script>
    </>
  );
}
