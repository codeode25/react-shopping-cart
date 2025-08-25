import { createContext, useContext, useState } from "react";
import type { Product } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";


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
    const [cart, setCart] = useLocalStorage<CartItem[]>('cart', [])

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                )
            }

            return [...prev, {...product, quantity: 1}]
        })
    }

    const hasInCart = (id: number): boolean => {
        return !!cart.find((item) => item.id === id);
    }

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const updateQuantity = (id: number, quantity: number) => {
        setCart((prev) =>
            prev.map((item) => item.id === id ? {...item, quantity: Math.max(1, quantity)} : item)
        )
    }

    return <CartContext.Provider value={{cart, addToCart, hasInCart, removeFromCart, updateQuantity}}>
        {children}
    </CartContext.Provider>
}