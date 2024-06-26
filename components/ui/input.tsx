import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "text-black flex h-9 w-full rounded-md border-1 border-red-slate-300 dark:border-slate-700 bg-transparent px-3 py-3 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:cursor-pointer focus:cursor-auto focus:placeholder:opacity-0  focus:shadow-md outline-none placeholder:text-xs placeholder:transition-opacity mb-4",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
