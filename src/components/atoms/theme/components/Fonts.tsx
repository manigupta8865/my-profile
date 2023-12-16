import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`

    @import url("https://p.typekit.net/p.css?s=1&k=hyi6fgb&ht=tk&f=5664.18438.18443.18445&a=1511988&app=typekit&e=css");
      @font-face {
        font-family:"azo-sans-web";
        src:url("https://use.typekit.net/af/37ee84/00000000000000003b9afbbb/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/37ee84/00000000000000003b9afbbb/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/37ee84/00000000000000003b9afbbb/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:500;font-stretch:normal;
        }
    @font-face {
          font-family:"p22-underground-sc";
          src:url("https://use.typekit.net/af/0461c7/00000000000000000000de63/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff2"),url("https://use.typekit.net/af/0461c7/00000000000000000000de63/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff"),url("https://use.typekit.net/af/0461c7/00000000000000000000de63/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("opentype");
          font-display:auto;font-style:normal;font-weight:900;font-stretch:normal;
          }  
    @import url("https://p.typekit.net/p.css?s=1&k=hta4qem&ht=tk&f=139.173.175.176.5474.5475.25136&a=1511988&app=typekit&e=css");

      @font-face {
      font-family:"Proxima Nova Sans";
      src:url("https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
      font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
      }

      @font-face {
      font-family:"Proxima Nova Sans";
      src:url("https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/576d53/00000000000000003b9b3066/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
      font-display:auto;font-style:normal;font-weight:600;font-stretch:normal;
      }

      @font-face {
      font-family:"Proxima Nova Sans";
      src:url("https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
      font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
      }

      @font-face {
      font-family:"Proxima Nova Sans";
      src:url("https://use.typekit.net/af/5c70f2/00000000000000003b9b3063/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/5c70f2/00000000000000003b9b3063/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/5c70f2/00000000000000003b9b3063/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
      font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
      }

      @font-face {
      font-family:"Proxima Nova Sans";
      src:url("https://use.typekit.net/af/cebe0e/00000000000000003b9b3060/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/cebe0e/00000000000000003b9b3060/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/cebe0e/00000000000000003b9b3060/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
      font-display:auto;font-style:normal;font-weight:300;font-stretch:normal;
      }

      @font-face {
      font-family:"Proxima Nova Sans";
      src:url("https://use.typekit.net/af/40ff7f/00000000000000003b9b3061/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/40ff7f/00000000000000003b9b3061/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/40ff7f/00000000000000003b9b3061/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
      font-display:auto;font-style:italic;font-weight:300;font-stretch:normal;
      }

      @font-face {
      font-family:"Proxima Nova Sans";
      src:url("https://use.typekit.net/af/6e816b/00000000000000003b9b3064/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/6e816b/00000000000000003b9b3064/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/6e816b/00000000000000003b9b3064/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
      font-display:auto;font-style:normal;font-weight:500;font-stretch:normal;
      }
      `}
  />
);

export default Fonts;
