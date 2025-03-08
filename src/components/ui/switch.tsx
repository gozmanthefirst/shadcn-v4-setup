"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "shadow-xs peer inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent outline-none transition-all focus-visible:border-neutral-950 focus-visible:ring-[3px] focus-visible:ring-neutral-950/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/50 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=unchecked]:bg-neutral-800",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 dark:bg-neutral-950",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
