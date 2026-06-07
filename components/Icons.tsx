type IconProps = { className?: string };

const base = "h-7 w-7";

export function Icon({ name, className }: { name: string; className?: string }) {
  const cls = className ?? base;
  const common = {
    className: cls,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };
  switch (name) {
    case "dumbbell":
      return (
        <svg {...common}>
          <path d="M6.5 6.5l11 11" />
          <path d="M3 8l-1 1 3 3-3 3 1 1" />
          <path d="M5 6l1-1 3 3" />
          <path d="M21 16l1-1-3-3 3-3-1-1" />
          <path d="M19 18l-1 1-3-3" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />
        </svg>
      );
    case "kettlebell":
      return (
        <svg {...common}>
          <path d="M9 6.5a3 3 0 1 1 6 0" />
          <path d="M8 7c-2 1.4-3 3.7-3 6.5 0 3 2 5.5 7 5.5s7-2.5 7-5.5c0-2.8-1-5.1-3-6.5" />
          <path d="M9.5 7h5" />
        </svg>
      );
    case "bike":
      return (
        <svg {...common}>
          <circle cx="5.5" cy="17" r="3.2" />
          <circle cx="18.5" cy="17" r="3.2" />
          <path d="M5.5 17l4-6h5l-3-4" />
          <path d="M14.5 7h2.5" />
          <path d="M9.5 11l5 6" />
        </svg>
      );
    case "boxing":
      return (
        <svg {...common}>
          <path d="M8 5h6a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H9" />
          <path d="M9 13v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3" />
          <path d="M8 5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2" />
          <path d="M14 8h-1" />
        </svg>
      );
    case "yoga":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v5" />
          <path d="M12 12l-6 3" />
          <path d="M12 12l6 3" />
          <path d="M6 20l6-4 6 4" />
        </svg>
      );
    case "fire":
      return (
        <svg {...common}>
          <path d="M12 3c1 3-1.5 4-1.5 7a3.5 3.5 0 0 0 7 0c0-1-.3-2-1-3 .2 2-1 3-1.7 2.5C15.4 8 13.5 5.5 12 3z" />
          <path d="M8.5 12.5C8 13.4 7.5 14.6 7.5 16a4.5 4.5 0 0 0 9 0" />
        </svg>
      );
    case "spine":
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M12 5c2 0 3 .8 3 .8M12 9c2 0 3 .8 3 .8M12 13c2 0 3 .8 3 .8M12 17c2 0 3 .8 3 .8" />
          <path d="M12 5c-2 0-3 .8-3 .8M12 9c-2 0-3 .8-3 .8M12 13c-2 0-3 .8-3 .8M12 17c-2 0-3 .8-3 .8" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M4 12.5l5 5 11-11" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3L7.4 13.8 2.5 9.3l6.6-.8L12 2.5z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" className={cls} fill="currentColor">
          <path d="M.5 23.5l1.65-6a11.4 11.4 0 1 1 4.2 4.13L.5 23.5zM6.6 19.9l.37.22a9.47 9.47 0 1 0-3.2-3.13l.24.38-1 3.6 3.6-1.07zM17.6 14.3c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.6.76-.74.92-.13.16-.27.18-.5.06a7.7 7.7 0 0 1-2.27-1.4 8.5 8.5 0 0 1-1.57-1.95c-.16-.28 0-.43.1-.55.1-.1.23-.27.35-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.52-1.27-.72-1.73-.19-.45-.38-.39-.52-.4l-.45-.01c-.16 0-.42.06-.63.3-.22.23-.83.8-.83 1.96 0 1.15.85 2.27.97 2.43.12.16 1.67 2.55 4.04 3.58.57.24 1 .39 1.35.5.57.18 1.08.16 1.49.1.45-.07 1.38-.56 1.58-1.1.2-.55.2-1.02.14-1.12-.06-.1-.21-.16-.45-.28z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z" />
          <circle cx="12" cy="11" r="2.2" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V18a2 2 0 0 1-2.2 2A15 15 0 0 1 4 6.2 2 2 0 0 1 5 4z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    default:
      return null;
  }
}

export function Stars({ className }: IconProps) {
  return (
    <div className={`flex gap-0.5 text-accent ${className ?? ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4" />
      ))}
    </div>
  );
}
