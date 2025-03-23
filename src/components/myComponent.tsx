import React, { useEffect, useState } from "react";
import { fetchProduct } from "../api/productService"; // Импортируем функцию
import { Product } from "../interface/interface";

const MyComponent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const path = "https://jsonplaceholder.typicode.com/photos/?_limit=10";
  const loadProduct = async () => {
    try {
      const data = await fetchProduct(path);
      setProducts(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Произошла неизвестная ошибка");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id} - ${product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
