import * as React from "react";
import type { SVGProps } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="facebook_svg__mi-social"
    viewBox="0 0 17 31"
    {...props}
  >
    <path
      d="M11.057 30.428V16.81h4.633l.694-5.308h-5.327V8.113c0-1.537.432-2.584 2.666-2.584l2.848-.002V.78c-.492-.064-2.183-.209-4.15-.209-4.107 0-6.919 2.474-6.919 7.016v3.915H.857v5.307h4.645v13.62h5.555z"
      className="facebook_svg__fill-icon"
    />
  </svg>
);
export default SvgFacebook;
