// CarritoContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CarritoItem {
  id: number;
  name: string;
  image: any; // Tipo de imagen según tu implementación
  quantity: number;
  price: number;
}

interface CarritoContextType {
  carrito: CarritoItem[];
  agregarAlCarrito: (item: CarritoItem) => void;
  quitarDelCarrito: (index: number) => void;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

interface CarritoProviderProps {
  children: ReactNode;
}

export const CarritoProvider = ({ children }: CarritoProviderProps) => {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

  const agregarAlCarrito = (item: CarritoItem) => {
    setCarrito([...carrito, item]);
  };

  const quitarDelCarrito = (index: number) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, quitarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser utilizado dentro de un CarritoProvider');
  }
  return context;
};
