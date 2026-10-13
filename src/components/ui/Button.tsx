"use client";

import { ButtonHTMLAttributes, forwardRef, isValidElement, cloneElement, MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, asChild = false, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
      ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-5 py-3 text-sm",
      lg: "px-6 py-3.5 text-base",
    };

    const buttonClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && isValidElement(children)) {
      const child = children as React.ReactElement<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
      const childProps = child.props;

      const handleClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
        if (disabled || loading) {
          e.preventDefault();
          return;
        }
        childProps.onClick?.(e);
      };

      const mergedProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
        ...childProps,
        className: cn(
          buttonClassName,
          childProps.className,
          "w-full h-full",
        ),
        style: {
          ...childProps.style,
        },
        onClick: handleClick,
        ...(disabled && { "aria-disabled": "true" }),
        ...(loading && { "aria-busy": "true" }),
      };

      return cloneElement(child, mergedProps, child.props.children);
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";