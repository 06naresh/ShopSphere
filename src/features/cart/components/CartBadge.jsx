import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Chip from "@mui/material/Chip";

function CartBadge({ count }) {
  return (
    <div className="flex items-center gap-2">
      <ShoppingCartIcon />

      <span className="font-medium">
        Cart
      </span>

      {count > 0 && (
        <Chip
          label={count}
          color="primary"
        />
      )}
    </div>
  );
}

export default CartBadge;