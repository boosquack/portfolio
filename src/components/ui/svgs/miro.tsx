import type { SVGProps } from "react";

const Miro = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <rect width="256" height="256" rx="20" fill="#9CA3AF" />
    <path
      d="M175.5 48h-25l25 40-45-40h-25l25 55-45-55h-25l25 70-45-70h-25l55 110 55-110 55 110V48h-25Z"
      fill="#F9FAFB"
    />
  </svg>
);

export { Miro };
