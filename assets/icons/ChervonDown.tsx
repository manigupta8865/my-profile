import * as React from "react";
import type { SVGProps } from "react";
const SvgChervonDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={11}
    fill="none"
    {...props}
  >
    <path stroke="#333" strokeWidth={2} d="M17 1 9 9 1 1" />
  </svg>
);
export default SvgChervonDown;
