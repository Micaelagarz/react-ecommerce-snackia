import React, { useState, useContext, createContext } from 'react';
import { useEffect } from 'react';
//1. Creating the context
const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }

    return context;
}

export const CartProvider = ({ children }) => { //The cart starts off empty.

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);



    const addToCart = (product, quantity) => {
        const itemInCart = cart.find(item => item.id === product.id);

        if (itemInCart) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );

            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
        }

    }

    const getCurrentQty = (id) => {
        const item = cart.find(item => item.id === id);
        return item ? item.quantity : 0;
    }

    const clearCart = () => {
        setCart([]);
    }

    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const updateQuantity = (id, amount) => {
        setCart(prevCart =>
            prevCart.map(item => {
                if (item.id === id) {
                    const newQuantity = item.quantity + amount;
                    return { ...item, quantity: Math.max(1, newQuantity) };
                }
                return item;
            })
        )
    }

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            getCartQuantity,
            getCartTotal,
            getCurrentQty,
            updateQuantity,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
}