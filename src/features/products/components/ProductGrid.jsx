import ProductCard from "./ProductCard";

function ProductGrid({
  products,
  onAddToCart,
}) {
  return (
    <section id="products">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Products
        </h2>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {products.length} products
        </span>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;