const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://dummyjson.com";

export async function getProducts({
  search,
  category,
  sortBy,
  page,
  limit,
  signal,
}) {
  const skip =
    (page - 1) * limit;

  let endpoint = "/products";

  const params =
    new URLSearchParams();

  params.set("limit", limit);
  params.set("skip", skip);

  if (search.trim()) {
    endpoint = "/products/search";
    params.set("q", search.trim());
  } else if (
    category &&
    category !== "all"
  ) {
    endpoint =
      `/products/category/${encodeURIComponent(
        category
      )}`;
  }

  if (sortBy === "name-asc") {
    params.set("sortBy", "title");
    params.set("order", "asc");
  }

  if (sortBy === "name-desc") {
    params.set("sortBy", "title");
    params.set("order", "desc");
  }

  if (sortBy === "price-low") {
    params.set("sortBy", "price");
    params.set("order", "asc");
  }

  if (sortBy === "price-high") {
    params.set("sortBy", "price");
    params.set("order", "desc");
  }

  const response = await fetch(
    `${API_BASE_URL}${endpoint}?${params.toString()}`,
    {
      signal,
    }
  );

  if (!response.ok) {
    throw new Error(
      `HTTP Error: ${response.status}`
    );
  }

  const data =
    await response.json();

  return {
    products: data.products.map(
      normalizeProduct
    ),

    total: data.total,
  };
}

export async function getCategories(
  signal
) {
  const response = await fetch(
    `${API_BASE_URL}/products/category-list`,
    {
      signal,
    }
  );

  if (!response.ok) {
    throw new Error(
      `HTTP Error: ${response.status}`
    );
  }

  return response.json();
}

export async function getProductById(
  productId,
  signal
) {
  const response = await fetch(
    `${API_BASE_URL}/products/${productId}`,
    {
      signal,
    }
  );

  if (!response.ok) {
    throw new Error(
      `HTTP Error: ${response.status}`
    );
  }

  const data =
    await response.json();

  return normalizeProduct(data);
}

function normalizeProduct(product) {
  return {
    id: product.id,
    name: product.title,
    price: product.price,
    category: product.category,
    description: product.description,
    image: product.thumbnail,
    images: product.images || [],
    rating: product.rating,
    stock: product.stock,
    inStock: product.stock > 0,
    discountPercentage:
      product.discountPercentage,
  };
}