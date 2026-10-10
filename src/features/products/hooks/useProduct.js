import {
  useEffect,
  useState,
} from "react";

import { getProductById } from "../api/productApi";

function useProduct(productId) {
  const [product, setProduct] =
    useState(null);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    const controller =
      new AbortController();

    async function loadProduct() {
      try {
        setIsLoading(true);
        setError(null);

        const data =
          await getProductById(
            productId,
            controller.signal
          );

        setProduct(data);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadProduct();

    return () => {
      controller.abort();
    };
  }, [productId]);

  return {
    product,
    isLoading,
    error,
  };
}

export default useProduct;