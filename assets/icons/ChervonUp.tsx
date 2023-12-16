import * as React from "react";
import type { SVGProps } from "react";
const SvgChervonUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={11}
    fill="none"
    {...props}
  >
    <path stroke="#333" d="m1 10 8-8 8 8" />
  </svg>
);
export default SvgChervonUp;
