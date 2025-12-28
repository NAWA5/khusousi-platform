'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of a cart item (can be a subset of CourseProps)
interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    instructor: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    cartCount: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('khusousi-cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save to localStorage needed whenever cart changes
    useEffect(() => {
        if (!isInitialized) return;
        localStorage.setItem('khusousi-cart', JSON.stringify(cartItems));
    }, [cartItems, isInitialized]);

    const addToCart = (item: CartItem) => {
        setCartItems((prev) => {
            if (prev.find((i) => i.id === item.id)) return prev; // Avoid duplicates
            return [...prev, item];
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = cartItems.length;
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartCount, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
