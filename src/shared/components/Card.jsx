import { cn } from "../utils/cn";

function Card({
  title,
  children,
  className = "",
}) {
  return (
    <section
      className={cn(
        `
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        dark:border-gray-700
        dark:bg-gray-800
        `,
        className
      )}
    >
      {title && (
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}

export default Card;