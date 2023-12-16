import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#58595B"
      fillRule="evenodd"
      d="M7 0a7 7 0 0 1 7 7c0 3-3 9-7 13-4-4-7-10-7-13a7 7 0 0 1 7-7Zm0 1a6 6 0 0 0-6 6c0 2.566 2.476 7.522 5.648 11.157L7 18.55l.086-.093c3.212-3.561 5.776-8.549 5.909-11.244L13 7a6 6 0 0 0-6-6Zm0 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLocation;
