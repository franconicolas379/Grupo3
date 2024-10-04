"use client";
import { useEffect, useState } from 'react';
import { IProduct } from '../page';

async function fetchProductById(id: string) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
}

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const getProduct = async () => {
        const productData = await fetchProductById(id);
        if (productData) {
          setProduct(productData);
        } else {
          setError("Producto no encontrado.");
        }
        setLoading(false);
      };
  
      getProduct();
    }, [id]);
  
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
  
    return (
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
          <div className="relative w-full h-80 mb-4 overflow-hidden rounded-lg shadow-lg"> {/* Aumentar h-64 a h-80 */}
            <img
              src={product?.image}
              alt={product?.title}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-lg font-semibold mb-2">Precio: ${product?.price}</p>
          <p className="text-gray-700 mb-4">{product?.description}</p>
          <p className="text-sm text-gray-500">Categoría: {product?.category}</p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition duration-200">
            Añadir al carrito
          </button>
        </div>
      );
  }