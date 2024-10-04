"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { IProduct } from "../products/page";

interface CarritoContextType {
  carrito: IProduct[];
  addToCarrito: (product: IProduct) => void;
  removeFromCarrito: (productId: number) => void;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe ser usado dentro de un CarritoProvider");
  }
  return context;
};

export const CarritoProvider = ({ children }: { children: ReactNode }) => {
  const [carrito, setCarrito] = useState<IProduct[]>([]);

  const addToCarrito = (product: IProduct) => {
    setCarrito((prev) => [...prev, product]);
  };

  const removeFromCarrito = (productId: number) => {
    setCarrito((prev) => prev.filter(product => product.id !== productId));
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCarrito, removeFromCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};