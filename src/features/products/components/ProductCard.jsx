import Button from "../../../shared/components/Button";
import Card from "../../../shared/components/Card";

function ProductCard({
  product,
  onAddToCart,
}) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="h-52 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            hover:scale-105
          "
        />
      </div>

      <div className="p-5">
        <span
          className="
            inline-block
            rounded-full
            bg-blue-100
            px-3
            py-1
            text-xs
            font-medium
            text-blue-700
            dark:bg-blue-900
            dark:text-blue-200
          "
        >
          {product.category}
        </span>

        <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {product.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-gray-600 dark:text-gray-300">
            {product.stock} available
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <strong className="text-xl font-bold text-gray-900 dark:text-white">
            ₹{product.price.toLocaleString()}
          </strong>

          {product.inStock ? (
            <Button
              size="sm"
              onClick={() =>
                onAddToCart(product)
              }
            >
              Add to Cart
            </Button>
          ) : (
            <Button
              size="sm"
              disabled
            >
              Out of Stock
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;