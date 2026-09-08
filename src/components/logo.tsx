import { cn } from "@/lib/utils";

export function InfinityMark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 72 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M36 18C32.2 10.4 26.6 6 20 6 12.3 6 6 11.4 6 18s6.3 12 14 12c6.6 0 12.2-4.4 16-12"
        className={inverted ? "stroke-navy-fg" : "stroke-navy"}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M36 18c3.8 7.6 9.4 12 16 12 7.7 0 14-5.4 14-12S59.7 6 52 6c-6.6 0-12.2 4.4-16 12"
        className="stroke-accent"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  compact = false,
  inverted = false,
}: {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <InfinityMark
        inverted={inverted}
        className={cn("h-8 w-16 shrink-0", compact && "h-7 w-14")}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-sans text-[0.95rem] font-semibold tracking-tight",
            inverted ? "text-navy-fg" : "text-navy",
            compact && "text-[0.85rem]",
          )}
        >
          WAF & ANOH
        </span>
        <span
          className={cn(
            "mt-1 font-sans text-[0.62rem] font-semibold tracking-[0.22em] text-accent",
            compact && "text-[0.58rem] tracking-[0.18em]",
          )}
        >
          CONSULTING
        </span>
      </span>
    </span>
  );
}
