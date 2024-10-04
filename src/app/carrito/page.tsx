import { useCarrito } from "./carritoContext";


export default function CarritoPage() {
  const { carrito, removeFromCarrito } = useCarrito();

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold my-8">Carrito de Compras</h2>
      {carrito.length > 0 ? (
        <div className="space-y-4">
          {carrito.map((product, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">{product.title}</p>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <button
                onClick={() => removeFromCarrito(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          ))}
          <p className="text-xl font-semibold mt-4">
            Total de productos: {carrito.length}
          </p>
        </div>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
}