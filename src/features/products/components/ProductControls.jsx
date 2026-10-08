function ProductControls({
  sortBy,
  onSortChange,
}) {
  return (
    <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
      <label
        htmlFor="sort-products"
        className="text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Sort by:
      </label>

      <select
        id="sort-products"
        value={sortBy}
        onChange={(event) =>
          onSortChange(
            event.target.value
          )
        }
        className="
          rounded-lg
          border
          border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          text-gray-900
          outline-none
          focus:ring-2
          focus:ring-blue-500

          dark:border-gray-600
          dark:bg-gray-800
          dark:text-white
        "
      >
        <option value="default">
          Default
        </option>

        <option value="name-asc">
          Name: A-Z
        </option>

        <option value="name-desc">
          Name: Z-A
        </option>

        <option value="price-low">
          Price: Low to High
        </option>

        <option value="price-high">
          Price: High to Low
        </option>
      </select>
    </div>
  );
}

export default ProductControls;