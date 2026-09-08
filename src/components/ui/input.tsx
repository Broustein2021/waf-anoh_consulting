import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-xl bg-bg-elevated px-4 text-base text-fg shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-muted/70 focus-visible:shadow-[0_0_0_2px_var(--color-accent)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
