import { cva } from "class-variance-authority";

import { cn } from "../utils/cn";

const buttonVariants = cva(
  `
    inline-flex
    items-center
    justify-center
    font-medium
    transition
    duration-200
    disabled:opacity-50
    disabled:pointer-events-none
  `,
  {
    variants: {
      intent: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700",

        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",

        danger:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm:
          "h-8 px-3 text-sm rounded",

        md:
          "h-10 px-5 text-base rounded-lg",

        lg:
          "h-12 px-7 text-lg rounded-xl",
      },
    },

    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

function Button({
  intent,
  size,
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        buttonVariants({
          intent,
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;