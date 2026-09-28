import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ carrito, addToCart, removeFromCart, cantidadTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
