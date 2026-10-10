import { Link, useOutletContext } from "react-router-dom";
import {CheckoutForm, PromoCode} from "../features/checkout"

import Card from "../shared/components/Card";
function CheckoutPage() {

    const {cart} = useOutletContext();

    if(cart.length === 0){
        return (
            <Card title="Your Cart Is Empty">
                <p className="text-gray-600 dark:text-gray-300">
                    Add some products before checking out.
                </p>

                <Link
                    to="/products"
                    className="mt-4 inline-block text-blue-600"
                >
                    ← Browse Products
                </Link>
            </Card>
        );
    }

    return ( 
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Checkout
                </h1>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Complete your order.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <PromoCode />

                <div>
                    <CheckoutForm />
                </div>
            </div>
        </div>
     );
}

export default CheckoutPage;