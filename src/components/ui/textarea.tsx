import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-xl bg-bg-elevated px-4 py-3 text-base text-fg shadow-card outline-none transition-[box-shadow] duration-150 placeholder:text-muted/70 focus-visible:shadow-[0_0_0_2px_var(--color-accent)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
