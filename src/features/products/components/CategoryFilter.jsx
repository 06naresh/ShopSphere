function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div
      id="categories"
      className="mt-5 flex flex-wrap gap-2"
    >
      <button
        className={`
          rounded-full
          px-4
          py-2
          text-sm
          font-medium
          transition

          ${
            selectedCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          }
        `}
        onClick={() =>
          onCategoryChange("all")
        }
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={`
            rounded-full
            px-4
            py-2
            text-sm
            font-medium
            transition

            ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }
          `}
          onClick={() =>
            onCategoryChange(category)
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;