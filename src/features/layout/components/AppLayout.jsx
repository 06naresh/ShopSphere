import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header"

function AppLayout() {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((previousCart) => {
            const existingProduct = previousCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return previousCart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        } : item);
            }

            return [
                ...previousCart,
                {
                    ...product,
                    quantity: 1,
                },
            ];
        });
    };

    const removeFromCart = (productId) => {
        setCart((previousCart) =>
            previousCart.filter(
                (item) => item.id !== productId
            )
        );
    };

    const cartCount = useMemo(
        () =>
            cart.reduce(
                (total, item) => total + item.quantity,
                0
            ),
        [cart]
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
            <Header cartCount={cartCount} />

            <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <Outlet
                    context={{
                        cart,
                        addToCart,
                        removeFromCart,
                        cartCount,
                    }}
                />
            </main>
        </div>
    )
}

export default AppLayout;