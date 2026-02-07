import type { SVGProps } from "react";

const PowerBI = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <rect width="256" height="256" rx="20" fill="#6B7280" />
    <path
      d="M88 56h32c4.4 0 8 3.6 8 8v128c0 4.4-3.6 8-8 8H88c-4.4 0-8-3.6-8-8V64c0-4.4 3.6-8 8-8Z"
      fill="#F9FAFB"
    />
    <path
      d="M136 96h32c4.4 0 8 3.6 8 8v88c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8v-88c0-4.4 3.6-8 8-8Z"
      fill="#D4D4D8"
    />
    <path
      d="M184 136h-8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h8c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8Z"
      fill="#A1A1AA"
    />
  </svg>
);

export { PowerBI };
