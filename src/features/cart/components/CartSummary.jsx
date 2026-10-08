import Card from "../../../shared/components/Card";

function CartSummary({ cart = [] }) {
  if (cart.length === 0) {
    return (
      <Card
        title="Your Cart"
        className="mt-10"
      >
        <p className="text-gray-600 dark:text-gray-300">
          Your cart is currently empty.
        </p>
      </Card>
    );
  }

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  return (
    <Card
      title="Your Cart"
      className="mt-10"
    >
      <div className="space-y-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-gray-700"
          >
            <span className="text-gray-700 dark:text-gray-200">
              {item.name} ×{" "}
              {item.quantity}
            </span>

            <span className="font-medium text-gray-900 dark:text-white">
              ₹
              {(
                item.price *
                item.quantity
              ).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-between text-lg font-bold text-gray-900 dark:text-white">
        <span>Total</span>

        <span>
          ₹{total.toLocaleString()}
        </span>
      </div>
    </Card>
  );
}

export default CartSummary;