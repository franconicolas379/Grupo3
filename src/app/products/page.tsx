
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCarrito } from "../carrito/carritoContext";


export interface IProduct{
    id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function fetchingBootcamp(): Promise<IProduct[]> {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
export default function Page() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const { addToCarrito } = useCarrito();
  
    useEffect(() => {
      const fetchProducts = async () => {
        const data = await fetchingBootcamp();
        setProducts(data);
      };
      fetchProducts();
    }, []);
  
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center my-8">Todos los Productos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length ? (
            products.map((data: IProduct) => (
              <div
                key={data.id}
                className="border rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 bg-white"
              >
                <Link href={`/products/${data.id}`} passHref>
                  <div className="cursor-pointer">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <h2 className="text-xl font-semibold mt-4">{data.title}</h2>
                  </div>
                </Link>
                <p className="text-gray-600 my-2">${data.price}</p>
                <p className="text-sm text-gray-500 mb-4">{data.description.substring(0, 100)}...</p>
                <button
                  onClick={() => addToCarrito(data)}
                  className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Añadir al carrito
                </button>
              </div>
            ))
          ) : (
            <div className="text-2xl col-span-full text-center">Cargando Productos...</div>
          )}
        </div>
      </div>
    );
  }