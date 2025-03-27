
import React, { useEffect, useState } from "react";
import { fetchProduct } from "../../api/productService"; // Импортируем функцию
import { Product } from "../../interface/interface";
import './myComponent.css';
import Card from "../../components/Card/Card";
import Modal from "../../components/Vladlen/Modal/Modal";

const MyComponent: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [modal, setModal] = useState(false);
    const [numItem, setNumItem] = useState(0)
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
    function toggleModal() {
      setModal((prev) => !prev);
    }
    useEffect(() => {
        loadProduct();
    }, []);
    const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
      const target = e.target as HTMLElement; // Приводим тип к HTMLElement

      if (target.tagName === "LI"|| target.closest('li')?.tagName === 'LI') { // Проверяем, является ли кликнутый элемент <li>
          const clickedId = target.getAttribute('data-id'); // Получаем id из атрибута data-id
          console.log(`Клик по элементу с ID: ${clickedId}`);
          setNumItem(Number(clickedId)-1);
          toggleModal();
      }
  };
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <main className="wrapper_board">
            <h1>Products</h1>
            <ul className="list_cards" onClick={(e)=>handleClick(e)}>
                {products.map((product) => (
                    <Card key={product.id} productCard={product} />
                ))}
            </ul>
            <Modal open={modal} toggleModal={toggleModal}>
        <h3>ID product: {products[numItem].id}</h3>
        <p>
          {products[numItem].title}
        </p>
      </Modal>
        </main>
    );
};

export default MyComponent;