import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "tooth"
  | "sparkle"
  | "shield"
  | "braces"
  | "child"
  | "alert"
  | "building"
  | "crown"
  | "check"
  | "calendar"
  | "phone"
  | "whatsapp"
  | "pin"
  | "clock"
  | "arrow"
  | "arrowLeft"
  | "menu"
  | "close"
  | "plus"
  | "document"
  | "camera"
  | "star"
  | "creditCard"
  | "instagram"
  | "facebook"
  | "external"
  | "scan"
  | "tool"
  | "heart"
  | "lock"
  | "download"
  | "search";

const paths: Record<IconName, ReactNode> = {
  tooth: (
    <path d="M12 4.2c-1.6-1-3.2-1.5-4.6-.9C5.6 4 4.5 6 4.7 8.6c.1 1.5.6 2.5.9 4 .3 1.4.3 2.6.6 4.1.2 1.4.6 3 1.8 3 1.1 0 1.3-1.5 1.6-3 .3-1.4.4-2.7 1.3-2.7s1 1.3 1.3 2.7c.3 1.5.5 3 1.6 3 1.2 0 1.6-1.6 1.8-3 .3-1.5.3-2.7.6-4.1.3-1.5.8-2.5.9-4 .2-2.6-.9-4.6-2.7-5.3-1.4-.6-3-.1-4.6.9Z" />
  ),
  sparkle: (
    <>
      <path d="M12 3.5l1.9 4.9 4.9 1.9-4.9 1.9L12 17.1l-1.9-4.9L5.2 10.3l4.9-1.9L12 3.5Z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5l7 2.6v5.5c0 4.1-2.8 7.4-7 8.9-4.2-1.5-7-4.8-7-8.9V6.1l7-2.6Z" />
      <path d="M9.2 12l2.1 2.1 3.8-4" />
    </>
  ),
  braces: (
    <>
      <path d="M4 9c2.6-1.8 5.3-2.7 8-2.7s5.4.9 8 2.7" />
      <path d="M4 15c2.6 1.8 5.3 2.7 8 2.7s5.4-.9 8-2.7" />
      <rect x="5.4" y="10.4" width="3.2" height="3.2" rx="0.6" />
      <rect x="10.4" y="10.4" width="3.2" height="3.2" rx="0.6" />
      <rect x="15.4" y="10.4" width="3.2" height="3.2" rx="0.6" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20.5c.6-3.7 3.2-5.8 6.5-5.8s5.9 2.1 6.5 5.8" />
      <path d="M9.6 7.6c.8.7 1.6 1 2.4 1s1.6-.3 2.4-1" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.8l9 15.4H3l9-15.4Z" />
      <path d="M12 9.5v4.2" />
      <path d="M12 16.6h.01" />
    </>
  ),
  building: (
    <>
      <path d="M4 20.5V6.5l7-2.5v16.5" />
      <path d="M11 10.5h9v10" />
      <path d="M7 8.5h.01M7 12h.01M7 15.5h.01M14.5 14h2M14.5 17.5h2" />
      <path d="M3 20.5h18" />
    </>
  ),
  crown: (
    <>
      <path d="M4.5 9.5l2.8 2.6L12 5.5l4.7 6.6 2.8-2.6-1.6 9.1H6.1L4.5 9.5Z" />
      <path d="M6.4 19.2h11.2" />
    </>
  ),
  check: <path d="M4.5 12.6l4.7 4.6L19.5 7" />,
  calendar: (
    <>
      <rect x="3.6" y="5.4" width="16.8" height="15" rx="2.4" />
      <path d="M8 3.5v3.6M16 3.5v3.6M3.6 10.2h16.8" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17.4h.01M12 17.4h.01" />
    </>
  ),
  phone: (
    <path d="M6.4 3.6h3l1.6 4-2 1.5a11.6 11.6 0 0 0 5.9 5.9l1.5-2 4 1.6v3c0 1.2-1 2.2-2.2 2.1C10.6 19.1 4.9 13.4 4.3 5.8c0-1.2.9-2.2 2.1-2.2Z" />
  ),
  whatsapp: (
    <>
      <path d="M20.4 11.7a8.4 8.4 0 0 1-12.5 7.4L3.6 20.4l1.3-4.2a8.4 8.4 0 1 1 15.5-4.5Z" />
      <path d="M8.9 8.2c.4-.1.7 0 .9.4l.6 1.2c.1.3 0 .6-.2.8l-.4.4a6 6 0 0 0 3.1 3.1l.4-.5c.2-.2.5-.3.8-.2l1.3.6c.4.2.5.5.4.9-.2.9-1.1 1.5-2 1.4-3-.4-5.3-2.7-5.7-5.7-.1-.9.4-1.8 1.3-2Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.4V12l3.2 2" />
    </>
  ),
  arrow: <path d="M4.5 12h15m-5.6-5.6L19.5 12l-5.6 5.6" />,
  arrowLeft: <path d="M19.5 12h-15m5.6-5.6L4.5 12l5.6 5.6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5.5v13M5.5 12h13" />,
  document: (
    <>
      <path d="M6 3.6h7.5L18 8.2v12.2H6V3.6Z" />
      <path d="M13.2 3.8v4.6H18" />
      <path d="M9 12.5h6M9 16h4.5" />
    </>
  ),
  camera: (
    <>
      <path d="M3.6 8.6h3l1.4-2.2h8l1.4 2.2h3v10.8H3.6V8.6Z" />
      <circle cx="12" cy="13.8" r="3.4" />
    </>
  ),
  star: (
    <path d="M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 9.7l5.4-.8L12 4Z" />
  ),
  creditCard: (
    <>
      <rect x="3.2" y="5.6" width="17.6" height="12.8" rx="2.2" />
      <path d="M3.2 10.2h17.6M6.8 14.6h3.4" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.4" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.9 7.1h.01" />
    </>
  ),
  facebook: (
    <path d="M14.8 8.2h2.4V5h-2.7c-2.3 0-3.7 1.5-3.7 3.9v1.9H8.3v3.2h2.5V21h3.4v-7h2.5l.5-3.2h-3V9.2c0-.7.3-1 .6-1Z" />
  ),
  external: (
    <>
      <path d="M14 4.5h5.5V10" />
      <path d="M19.5 4.5L11 13" />
      <path d="M18 14v5.5H4.5V6H10" />
    </>
  ),
  scan: (
    <>
      <path d="M4.5 8.5V4.5h4M19.5 8.5V4.5h-4M4.5 15.5v4h4M19.5 15.5v4h-4" />
      <path d="M8 12h8" />
    </>
  ),
  tool: (
    <>
      <path d="M15.6 4.6a4.2 4.2 0 0 0-4.9 5.5L4.5 16.3l3.2 3.2 6.2-6.2a4.2 4.2 0 0 0 5.5-4.9l-2.5 2.5-2.6-.7-.7-2.6 2-2Z" />
    </>
  ),
  heart: (
    <path d="M12 20.2S4 15.5 4 9.9A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 8 2.5c0 5.6-8 10.3-8 10.3Z" />
  ),
  lock: (
    <>
      <rect x="4.8" y="10.4" width="14.4" height="10" rx="2.2" />
      <path d="M8.4 10.4V7.8a3.6 3.6 0 0 1 7.2 0v2.6" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v10m-4-4l4 4 4-4" />
      <path d="M5 18.5h14" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.4" />
      <path d="M15.8 15.8l4.2 4.2" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  const filled = name === "facebook";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
