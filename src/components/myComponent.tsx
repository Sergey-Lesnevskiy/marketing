import React, { useEffect, useState } from "react";
import { fetchProduct } from "../api/productService"; // Импортируем функцию
import { Product } from "../interface/interface";
import './myComponent.css'

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
    <div className="wrapper_board">
      <h1>Products</h1>
      <ul className="list_cards">
        {products.map((product) => (
          <li key={product.id} className="item_card">
            <p>Ссылка на продукт: <span className="url_product">{product.url}</span></p>
            <p>Id продукта: <span>{product.id}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
