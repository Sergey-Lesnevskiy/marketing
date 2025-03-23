import { Product } from '../interface/interface';

export const fetchProduct = async (path:string): Promise<Product[]> => {
    const response = await fetch(path); // Ваш API
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};