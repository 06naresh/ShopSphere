import { Link } from "react-router-dom";
import Card from "../shared/components/Card";
import Button from "../shared/components/Button";


function OrderSuccess() {
    return ( 
        <div className="mx-auto max-w-xl">
            <Card className="text-center">
                <div className="text-5xl">
                    ✅
                </div>

                <h1 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
                    Order Placed Successfully!
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                    Thank you for shopping with ShopSphere.
                </p>

                <Link
                    to="/products"
                    className="mt-6 inline-block no-underline"
                >
                    <Button>Continue Shopping</Button>
                </Link>
            </Card>
        </div>
     );
}

export default OrderSuccess;  