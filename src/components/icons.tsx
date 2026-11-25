import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 6.5C10.4 5.2 8.3 4.5 5.5 4.5H4v13h1.75c2.6 0 4.7.65 6.25 1.9 1.55-1.25 3.65-1.9 6.25-1.9H20v-13h-1.5c-2.8 0-4.9.7-6.5 2Z" />
      <path d="M12 6.5V19" />
    </Base>
  );
}

export function GamepadIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7.5 8h9a5 5 0 0 1 4.9 6l-.5 2.3A2.6 2.6 0 0 1 16 17.4l-1.2-1.6a2 2 0 0 0-1.6-.8h-2.4a2 2 0 0 0-1.6.8L8 17.4a2.6 2.6 0 0 1-4.9-1.1L2.6 14a5 5 0 0 1 4.9-6Z" />
      <path d="M8 11.5v3M6.5 13h3" />
      <path d="M16.5 12.4h.01M18 14h.01" />
    </Base>
  );
}

export function UtensilsIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 3v7a2 2 0 0 0 2 2v9M11 3v7a2 2 0 0 1-2 2M4 3v4a3 3 0 0 0 3 3" />
      <path d="M16.5 3c1.7 0 3 2 3 5s-1.3 4.5-3 4.5V21" />
      <path d="M16.5 3v9.5" />
    </Base>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1Z" />
    </Base>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </Base>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Base>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Base>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21s6.5-5.4 6.5-10.3A6.5 6.5 0 0 0 5.5 10.7C5.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </Base>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.6a3 3 0 0 1 0 5.8M17.5 14.4a5.5 5.5 0 0 1 3 5.1" />
    </Base>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m6 9 6 6 6-6" />
    </Base>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7l-1.6-5.5L5 10.6 10.4 9Z" />
      <path d="M18.5 15.5 19.2 18l2.3.8-2.3.8-.7 2.4-.7-2.4-2.3-.8 2.3-.8ZM5 3l.4 1.4L6.8 5l-1.4.5L5 7l-.4-1.5L3.2 5l1.4-.6Z" />
    </Base>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </Base>
  );
}

export function CrossIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v18M6.5 8.5h11" />
    </Base>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21c3.6 0 6-2.4 6-5.6 0-2.4-1.4-4.2-3.1-5.7-.7 1-1.5 1.6-2.2 1.8.3-2.5-.6-5.1-3.2-7.5.1 3-1 4.8-2.3 6.4A7.8 7.8 0 0 0 6 15.4C6 18.6 8.4 21 12 21Z" />
      <path d="M12 21c-1.4 0-2.5-1-2.5-2.4 0-1.3 1-2.2 2.5-3.6 1.5 1.4 2.5 2.3 2.5 3.6 0 1.4-1.1 2.4-2.5 2.4Z" />
    </Base>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3 20 6v5.5c0 4.5-3.2 7.8-8 9.5-4.8-1.7-8-5-8-9.5V6Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </Base>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-1.6 4-4 1.6 1.6-4Z" />
    </Base>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
    </Base>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5M12 8h.01" />
    </Base>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.5 21 20H3Z" />
      <path d="M12 9v5M12 17h.01" />
    </Base>
  );
}

export function MusicIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 18V6l10-2v11" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="15" r="2.5" />
    </Base>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Base>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8Z" />
    </Base>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="8" cy="15.5" r="3.5" />
      <path d="m10.5 13 8-8M16 7.5 18.5 10M14 9.5 16 11.5" />
    </Base>
  );
}

export function DicesIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="3.5" width="8" height="8" rx="1.6" />
      <rect x="12.5" y="12.5" width="8" height="8" rx="1.6" />
      <path d="M6.3 6.3h.01M8.7 8.7h.01M15.3 15.3h.01M18 18h.01" />
    </Base>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Base>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.5 8.5 0 1 0 10.2 10.2Z" />
      <path d="M17 4.5v2M16 5.5h2" />
    </Base>
  );
}
