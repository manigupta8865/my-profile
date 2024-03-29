import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="twitter_svg__mi-social"
    viewBox="0 0 32 26"
    {...props}
  >
    <path
      d="M32 3.69c-1.156.505-2.4.847-3.703 1a6.385 6.385 0 0 0 2.835-3.512 13.032 13.032 0 0 1-4.095 1.54A6.487 6.487 0 0 0 22.331.715c-3.561 0-6.448 2.842-6.448 6.347 0 .498.057.982.167 1.447A18.403 18.403 0 0 1 2.76 1.876a6.242 6.242 0 0 0-.874 3.191c0 2.202 1.139 4.145 2.869 5.283a6.5 6.5 0 0 1-2.92-.794l-.001.08c0 3.075 2.222 5.64 5.172 6.224a6.55 6.55 0 0 1-2.912.109c.82 2.521 3.202 4.357 6.024 4.408a13.067 13.067 0 0 1-8.008 2.717c-.52 0-1.034-.03-1.539-.089a18.46 18.46 0 0 0 9.885 2.852c11.86 0 18.345-9.672 18.345-18.06 0-.275-.006-.549-.018-.82A12.988 12.988 0 0 0 32 3.69z"
      className="twitter_svg__fill-icon"
    />
  </svg>
);
export default SvgTwitter;
