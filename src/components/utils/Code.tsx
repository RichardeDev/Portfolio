import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 mx-2 rounded-sm text-primary",
        className
      )}
      {...props}
    />
  );
};
export default Code;