import React from 'react';
import { Product } from '../../interface/interface';

interface CardProps { // Создаём интерфейс для пропсов
    productCard: Product; // Ожидаем, что productCard - это объект типа Product
}
const Card: React.FC<CardProps> = ({ productCard }) => { // Используем новый интерфейс для пропсов
  return (
      <li className="item_card" data-id={productCard.id}>
          <p data-id={productCard.id}>Ссылка на продукт: <span className="url_product" data-id={productCard.id}>{productCard.url}</span></p>
          <p data-id={productCard.id}>Id продукта: <span data-id={productCard.id}>{productCard.id} </span></p>
      </li>
  );
};

export default Card;