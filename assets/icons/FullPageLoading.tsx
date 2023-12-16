import * as React from "react";
import type { SVGProps } from "react";
const SvgFullPageLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
    {...props}
  >
    <path fill="none" d="M0 0h100v100H0z" />
    <g transform="translate(84 50)">
      <circle r={8} fill="#3c868b">
        <animate
          attributeName="opacity"
          begin="0s"
          dur="1s"
          from={1}
          repeatCount="indefinite"
          to={0.1}
        />
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="1s"
          from={1.4}
          repeatCount="indefinite"
          to={1}
          type="scale"
        />
      </circle>
    </g>
    <g transform="rotate(45 -52.355 126.397)">
      <circle r={8} fill="#3c868b">
        <animate
          attributeName="opacity"
          begin="0.12s"
          dur="1s"
          from={1}
          repeatCount="indefinite"
          to={0.1}
        />
        <animateTransform
          attributeName="transform"
          begin="0.12s"
          dur="1s"
          from={1.4}
          repeatCount="indefinite"
          to={1}
          type="scale"
        />
      </circle>
    </g>
    <g transform="rotate(90 -17 67)">
      <circle r={8} fill="#3c868b">
        <animate
          attributeName="opacity"
          begin="0.25s"
          dur="1s"
          from={1}
          repeatCount="indefinite"
          to={0.1}
        />
        <animateTransform
          attributeName="transform"
          begin="0.25s"
          dur="1s"
          from={1.4}
          repeatCount="indefinite"
          to={1}
          type="scale"
        />
      </circle>
    </g>
    <g transform="rotate(135 -2.355 42.397)">
      <circle r={8} fill="#3c868b">
        <animate
          attributeName="opacity"
          begin="0.37s"
          dur="1s"
          from={1}
          repeatCount="indefinite"
          to={0.1}
        />
        <animateTransform
          attributeName="transform"
          begin="0.37s"
          dur="1s"
          from={1.4}
          repeatCount="indefinite"
          to={1}
          type="scale"
        />
      </circle>
    </g>
    <g transform="rotate(180 8 25)">
      <circle r={8} fill="#3c868b">
        <animate
          attributeName="opacity"
          begin="0.5s"
          dur="1s"
          from={1}
          repeatCount="indefinite"
          to={0.1}
        />
        <animateTransform
          attributeName="transform"
          begin="0.5s"
          dur="1s"
          from={1.4}
          repeatCount="indefinite"
          to={1}
          type="scale"
        />
      </circle>
    </g>
    <g transform="rotate(-135 18.355 7.603)">
      <circle r={8} fill="#3c868b">
        <animate
          attributeName="opacity"
          begin="0.62s"
          dur="1s"
          from={1}
          repeatCount="indefinite"
          to={0.1}
        />
        <animateTransform
          attributeName="transform"
          begin="0.62s"
          dur="1s"
          from={1.4}
          repeatCount="indefinite"
          to={1}
          type="scale"
        />
      </circle>
    </g>
    <g transform="rotate(-90 33 -17)">
      <circle r={8} fill="#3c868b">
        <animate
          attributeName="opacity"
          begin="0.75s"
          dur="1s"
          from={1}
          repeatCount="indefinite"
          to={0.1}
        />
        <animateTransform
          attributeName="transform"
          begin="0.75s"
          dur="1s"
          from={1.4}
          repeatCount="indefinite"
          to={1}
          type="scale"
        />
      </circle>
    </g>
    <g transform="rotate(-45 68.355 -76.397)">
      <circle r={8} fill="#3c868b">
        <animate
          attributeName="opacity"
          begin="0.87s"
          dur="1s"
          from={1}
          repeatCount="indefinite"
          to={0.1}
        />
        <animateTransform
          attributeName="transform"
          begin="0.87s"
          dur="1s"
          from={1.4}
          repeatCount="indefinite"
          to={1}
          type="scale"
        />
      </circle>
    </g>
  </svg>
);
export default SvgFullPageLoading;
