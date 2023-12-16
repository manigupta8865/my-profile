import * as React from "react";
import type { SVGProps } from "react";
const SvgDismissing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#333"
      fillRule="evenodd"
      d="m10.47.47 1.06 1.06L7.061 6l4.47 4.47-1.061 1.06L6 7.061l-4.47 4.47L.47 10.47 4.94 6 .47 1.53 1.53.47 6 4.94 10.47.47Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDismissing;
