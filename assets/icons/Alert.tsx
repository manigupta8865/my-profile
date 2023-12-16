import * as React from "react";
import type { SVGProps } from "react";
const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#D73D00"
      fillRule="evenodd"
      d="M7.312.847a1.5 1.5 0 0 1 1.949.52l.072.125 6.359 12.32a1.5 1.5 0 0 1-1.189 2.181L14.36 16H1.642a1.5 1.5 0 0 1-1.393-2.056l.06-.132 6.359-12.32a1.5 1.5 0 0 1 .644-.645Zm1.133 1.104a.5.5 0 0 0-.848-.066l-.04.066-6.36 12.32a.5.5 0 0 0 .366.723l.079.006h12.717a.5.5 0 0 0 .475-.656l-.03-.073-6.36-12.32ZM8 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-7.25a.75.75 0 0 1 .744.648l.006.102V10a.75.75 0 0 1-1.493.102L7.25 10V5.5A.75.75 0 0 1 8 4.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAlert;
