import { Link, useOutletContext } from "react-router-dom";
import { CartSummary } from "../features/cart";
import Button from "../shared/components/Button";

function CartPage() {

    const {cart,} = useOutletContext();

    return ( 
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Shopping Cart
                </h1>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Review your selected products.
                </p>
            </div>

            <CartSummary cart={cart}/>

            {cart.length > 0 && (
                <div className="mt-6 flex justify-end">
                    <Link
                        to="/checkout"
                        className="no-underline"
                    >
                        <Button>
                            Proceed to CheckOut
                        </Button>
                    </Link>
                </div>
            )}
        </div>
     );
}

export default CartPage;