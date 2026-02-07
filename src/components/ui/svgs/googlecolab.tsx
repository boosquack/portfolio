import type { SVGProps } from "react";

const GoogleColab = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      d="M128 32c-44.183 0-80 35.817-80 80 0 20.52 7.728 39.236 20.431 53.395L128 224l59.569-58.605C200.272 151.236 208 132.52 208 112c0-44.183-35.817-80-80-80Z"
      fill="#9CA3AF"
    />
    <ellipse cx="100" cy="104" rx="24" ry="32" fill="#F9FAFB" />
    <ellipse cx="156" cy="104" rx="24" ry="32" fill="#F9FAFB" />
    <ellipse cx="100" cy="104" rx="12" ry="16" fill="#6B7280" />
    <ellipse cx="156" cy="104" rx="12" ry="16" fill="#6B7280" />
  </svg>
);

export { GoogleColab };
