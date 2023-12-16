import * as React from "react";
import type { SVGProps } from "react";
const SvgBurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M24 1H0V0h24v1Zm0 8H0V8h24v1ZM0 17h24v-1H0v1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBurgerMenu;
