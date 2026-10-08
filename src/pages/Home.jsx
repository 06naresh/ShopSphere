import { useState } from "react";

import {
    Header,
} from "../features/layout";

import {
    SearchBar,
    CategoryFilter,
    ProductControls,
    ProductGrid,
    Pagination,
    useProducts,
} from "../features/products";

import {
    CartSummary,
} from "../features/cart";

import {
    CheckoutForm,
    PromoCode,
} from "../features/checkout";

function Home() {
    const [cart, setCart] =
        useState([]);

    const [search, setSearch] =
        useState("");

    const [
        selectedCategory,
        setSelectedCategory,
    ] = useState("all");

    const [sortBy, setSortBy] =
        useState("default");

    const [page, setPage] =
        useState(1);

    const productsPerPage = 12;

    const {
        products,
        categories,
        total,
        isLoading,
        error,
        refetch,
    } = useProducts({
        search,
        category: selectedCategory,
        sortBy,
        page,
        limit: productsPerPage,
    });

    const addToCart = (product) => {
        setCart((previousCart) => {
            const existingProduct =
                previousCart.find(
                    (item) =>
                        item.id === product.id
                );

            if (existingProduct) {
                return previousCart.map(
                    (item) =>
                        item.id === product.id
                            ? {
                                ...item,
                                quantity:
                                    item.quantity + 1,
                            }
                            : item
                );
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

    const cartCount = cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

    const totalPages = Math.ceil(
        total / productsPerPage
    );

    const handleSearchChange = (
        value
    ) => {
        setSearch(value);
        setPage(1);
    };

    const handleCategoryChange = (
        category
    ) => {
        setSelectedCategory(category);
        setPage(1);
    };

    const handleSortChange = (
        value
    ) => {
        setSortBy(value);
        setPage(1);
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-slate-950 dark:text-white">
            <Header
                cartCount={cartCount}
            />

            <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <section className="mb-10 rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-12 text-white shadow-lg sm:px-10">
                    <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                        ShopSphere
                    </h1>

                    <p className="mt-4 max-w-2xl text-blue-100">
                        Discover quality products
                        from our online catalogue.
                    </p>
                </section>

                <section className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900 sm:p-6">
                    <SearchBar
                        search={search}
                        onSearchChange={
                            handleSearchChange
                        }
                    />

                    <CategoryFilter
                        categories={categories}
                        selectedCategory={
                            selectedCategory
                        }
                        onCategoryChange={
                            handleCategoryChange
                        }
                    />

                    <ProductControls
                        sortBy={sortBy}
                        onSortChange={
                            handleSortChange
                        }
                    />

                    <div className="mt-8">
                        {isLoading ? (
                            <div className="py-16 text-center">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Loading products...
                                </p>
                            </div>
                        ) : error ? (
                            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
                                <p className="font-semibold">
                                    Failed to load products.
                                </p>

                                <p className="mt-2 text-sm">
                                    {error}
                                </p>

                                <button
                                    onClick={refetch}
                                    className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                >
                                    Retry
                                </button>
                            </div>
                        ) : products.length ===
                            0 ? (
                            <div className="py-16 text-center">
                                <p className="text-gray-500 dark:text-gray-400">
                                    No products found.
                                </p>
                            </div>
                        ) : (
                            <>
                                <ProductGrid
                                    products={products}
                                    onAddToCart={
                                        addToCart
                                    }
                                />

                                <Pagination
                                    currentPage={page}
                                    totalPages={
                                        totalPages
                                    }
                                    onPageChange={
                                        setPage
                                    }
                                />
                            </>
                        )}
                    </div>
                </section>

                <CartSummary cart={cart} />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <PromoCode />

                    <CheckoutForm />
                </div>
            </main>
        </div>
    );
}

export default Home;