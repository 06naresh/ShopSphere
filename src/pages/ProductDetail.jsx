import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";

import Button from "../shared/components/Button";
import Card from "../shared/components/Card";
import  useProduct  from "../features/products/hooks/useProduct";

function ProductDetail() {

    const {productId} = useParams();

    const navigate = useNavigate();

    const {addToCart} = useOutletContext();

    const numericProductId = Number(productId);

    if(!Number.isInteger(numericProductId) || numericProductId <= 0){
        return(
            <Card title="Invalid Product">
                <p className="text-gray-600 dark:text-gray-300">
                    The product ID is invalid.
                </p>

                <Link
                    to="/products"
                    className="mt-4 inline-block text-blue-600"
                >
                    ← Back to Products
                </Link>
            </Card>
        );
    }

    const {product, isLoading, error,} = useProduct(numericProductId);

    if(isLoading) {
        return (
            <div className="py-20 text-center">
                Loading product...
            </div>
        );
    }

    if(error || !product){
        return (
            <Card title="Product Not Found">
                <p className="text-gray-600 dark:text-gray-300">
                    We couldn't find this product.
                </p>

                <Link
                    to="/products"
                    className="mt-4 inline-block text-blue-600"
                >
                    ← Back to Products
                </Link>
            </Card>
        );
    }

    const handleBuyNow = () => {
        addToCart(product)
        navigate("/checkout");
    }

    return (
        <>
            <Link
                to="/products"
                className="mb-6 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
            >
                ← Back to Products
            </Link>

            <Card>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full max-h-125 w-full object-cover"
                        />
                    </div>

                    <div>
                        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                            {product.category}
                        </span>

                        <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                            {product.name}
                        </h1>

                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            {product.description}
                        </p>


                        <div className="mt-5 flex gap-6">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Rating
                                </p>

                                <p className="font-semibold">
                                    ⭐ {product.rating}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Stock
                                </p>

                                <p className="font-semibold">
                                    {product.stock}
                                </p>
                            </div>
                        </div>

                        <p className="mt-8 text-3xl font-bold text-gray-900 dark:text-white">
                            ${product.price.toLocaleString()}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button
                                disabled={!product.inStock}
                                onClick={() => 
                                    addToCart(product)
                                }
                            >
                                Add to Cart
                            </Button>

                            <Button
                                intent="secondary"
                                disabled={!product.inStock}
                                onClick={handleBuyNow}
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default ProductDetail;