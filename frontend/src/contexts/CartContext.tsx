import { createContext, useContext, useState } from "react";
import type { Product } from "../types";


export type CartItem = Product & {quantity: number};

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    hasInCart: (id: number) => boolean;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a context");
    return context;
}

export const CartProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {}

    const hasInCart = (id: number): boolean => {}

    const removeFromCart = (id: number) => {}

    const updateQuantity = (id: number, quantity: number) => {}

    return <CartContext.Provider value={{cart, addToCart, hasInCart, removeFromCart, updateQuantity}}>
        {children}
    </CartContext.Provider>
}