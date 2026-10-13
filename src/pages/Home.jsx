import { useOutletContext, useSearchParams } from "react-router-dom";

import Header from "../features/layout/components/Header";

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

function Home() {
    const { cart, addToCart, } = useOutletContext();

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";

    const selectedCategory = searchParams.get("category") || "all";

    const sortBy = searchParams.get("sort") || "default";

    const pageValue = Number(searchParams.get("page")) || 1;

    const page = Number.isInteger(pageValue) && pageValue > 0 ? pageValue : 1;

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

    const totalPages = Math.ceil(
        total / productsPerPage
    );

    const updateSearchParam = (key, value, resetPage = true) => {
        const nextParams = new URLSearchParams(searchParams);

        if (value === "" || value === "all" || value === "default") {
            nextParams.delete(key);
        } else {
            nextParams.set(key, value);
        }

        if (resetPage && key !== "page") {
            nextParams.delete("page");
        }

        setSearchParams(nextParams, {
            replace: key !== "page",
        });
    };

    const handleSearchChange = (value) => {
        updateSearchParam("search", value)
    };

    const handleCategoryChange = (
        category
    ) => {
        updateSearchParam("category", category);
    };

    const handleSortChange = (
        value
    ) => {
        updateSearchParam("sort", value)
    };

    const handlePageChange = (newPage) => {
        updateSearchParam(
            "page",
            String(newPage),
            false
        );
    };

    return (
        <div>
            <section className="rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-12 text-white sm:px-10">
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-100">
                    ShopSphere
                </p>

                <h1 className="text-3xl font-bold sm:text-4xl">
                    Find the right product for you
                </h1>

                <p className="mt-3 max-w-2xl text-blue-100">
                    Browse our collection of quality products.
                </p>
            </section>

            <section className="mt-8">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
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
                </div>

                <div className="mt-8">
                    {isLoading && (
                        <div className="rounded-xl bg-white p-10 text-center dark:bg-gray-800">
                            <p className="text-gray-600 dark:text-gray-300">
                                Loading products...
                            </p>
                        </div>
                    )}

                    {error && (
                        <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950">
                            <p className="font-medium text-red-700 dark:text-red-300">
                                Failed to load products.
                            </p>

                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                {error}
                            </p>

                            <button
                                onClick={refetch}
                                className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white"
                            >
                                Retry
                            </button>
                        </div>
                    )}

                    {!isLoading &&
                        !error &&
                        products.length === 0 && (
                            <div className="rounded-xl bg-white p-10 text-center dark:bg-gray-800">
                                <p className="text-gray-600 dark:text-gray-300">
                                    No products found.
                                </p>
                            </div>
                        )}

                    {!isLoading &&
                        !error &&
                        products.length > 0 && (
                            <>
                                <ProductGrid
                                    products={products}
                                    onAddToCart={addToCart}
                                />

                                <Pagination
                                    currentPage={page}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </>
                        )}
                </div>
            </section>

            <CartSummary cart={cart} />
        </div >
    );
}

export default Home;