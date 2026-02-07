import type { SVGProps } from "react";

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 384" preserveAspectRatio="xMidYMid">
    <path
      d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"
      fill="#9CA3AF"
    />
    <path
      d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"
      fill="#A1A1AA"
    />
    <path
      d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"
      fill="#D4D4D8"
    />
    <path
      d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"
      fill="#E4E4E7"
    />
    <path
      d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64 28.672-64 64-64 64 28.672 64 64Z"
      fill="#6B7280"
    />
  </svg>
);

export { Figma };
