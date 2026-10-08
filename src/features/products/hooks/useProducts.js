import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  getProducts,
  getCategories,
} from "../api/productApi";

import useDebounce from "../../../shared/hooks/useDebounce";

function useProducts({
  search,
  category,
  sortBy,
  page,
  limit,
}) {
  const debouncedSearch =
    useDebounce(search, 500);

  const [products, setProducts] =
    useState([]);

  const [categories, setCategories] =
    useState([]);

  const [total, setTotal] =
    useState(0);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const [refreshKey, setRefreshKey] =
    useState(0);

  const loadProducts =
    useCallback(
      async (signal) => {
        try {
          setIsLoading(true);
          setError(null);

          const data =
            await getProducts({
              search: debouncedSearch,
              category,
              sortBy,
              page,
              limit,
              signal,
            });

          setProducts(data.products);
          setTotal(data.total);
        } catch (error) {
          if (
            error.name ===
            "AbortError"
          ) {
            return;
          }

          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      },
      [
        debouncedSearch,
        category,
        sortBy,
        page,
        limit,
      ]
    );

  useEffect(() => {
    const controller =
      new AbortController();

    loadProducts(
      controller.signal
    );

    return () => {
      controller.abort();
    };
  }, [
    loadProducts,
    refreshKey,
  ]);

  useEffect(() => {
    const controller =
      new AbortController();

    async function loadCategories() {
      try {
        const data =
          await getCategories(
            controller.signal
          );

        setCategories(data);
      } catch (error) {
        if (
          error.name !==
          "AbortError"
        ) {
          console.error(
            "Category loading failed:",
            error
          );
        }
      }
    }

    loadCategories();

    return () => {
      controller.abort();
    };
  }, []);

  const refetch = () => {
    setRefreshKey(
      (value) => value + 1
    );
  };

  return {
    products,
    categories,
    total,
    isLoading,
    error,
    refetch,
  };
}

export default useProducts;