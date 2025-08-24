import axios from "axios";
import type { Product } from "../types";

const API_URL = "http://localhost:3000";


export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
}

export const fetchProduct = async (id: number): Promise<Product> => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
}