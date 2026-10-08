import { cn } from "../utils/cn";

function Input({
  error,
  label,
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <input
        className={cn(
          `
          w-full
          rounded-lg
          border
          bg-white
          px-4
          py-2
          text-gray-900
          outline-none
          transition

          placeholder:text-gray-400

          focus:ring-2
          focus:ring-blue-500

          dark:border-gray-600
          dark:bg-gray-800
          dark:text-white
          `,
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300",
          className
        )}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;