import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-cupid font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:brightness-110 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-neon-pink via-pink-400 to-neon-purple text-white shadow-lg hover:shadow-[0_8px_30px_rgb(255,107,157,0.4)] hover:scale-105 animate-gradient-x relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        destructive:
          "bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg hover:shadow-[0_8px_30px_rgba(239,68,68,0.4)] hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        outline:
          "border-3 border-neon-pink bg-white/80 backdrop-blur-sm shadow-md hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:border-neon-purple hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,107,157,0.3)]",
        secondary:
          "bg-gradient-to-r from-mint via-emerald-400 to-sky text-white shadow-lg hover:shadow-[0_8px_30px_rgba(107,207,127,0.4)] hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        ghost:
          "hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 hover:text-neon-pink hover:shadow-sm",
        link: "text-neon-pink underline-offset-4 hover:underline hover:text-neon-purple hover:drop-shadow-[0_2px_8px_rgba(255,107,157,0.5)]",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-xl gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-2xl px-8 has-[>svg]:px-6 text-base",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <div className="group relative inline-flex">
      {/* Heart particles */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <svg
          className="absolute top-1/2 left-1/2 h-4 w-4 animate-[heart-float-1_1.5s_ease-out_infinite] fill-pink-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg
          className="absolute top-1/2 left-1/2 h-3 w-3 animate-[heart-float-2_1.8s_ease-out_infinite_0.2s] fill-red-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg
          className="absolute top-1/2 left-1/2 h-5 w-5 animate-[heart-float-3_2s_ease-out_infinite_0.4s] fill-pink-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg
          className="absolute top-1/2 left-1/2 h-3.5 w-3.5 animate-[heart-float-4_1.6s_ease-out_infinite_0.6s] fill-red-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg
          className="absolute top-1/2 left-1/2 h-4 w-4 animate-[heart-float-5_2.2s_ease-out_infinite_0.8s] fill-pink-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    </div>
  );
}

export { Button, buttonVariants };
