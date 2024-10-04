
import Link from "next/link";
//import { useCarrito } from "../carrito/carritoContext";

const navItems = [
    {
        label: "Home",
        route: "/",
    },
    {
        label: "Shop",
        route: "/products",
    },
];

export default function Navigation() {
    //const { carrito } = useCarrito();

    return (
        <nav className="w-full flex justify-center items-center p-4 bg-blue-900">
            <div className="flex gap-4">
                {navItems.map((item) => (
                    <Link key={item.label} href={item.route} className="text-2xl text-white hover:text-gray-300 hover:underline">
                        {item.label}
                    </Link>
                ))}
            </div>
            {/* <div className="relative">
                <Link href="/carrito">
                    <a className="text-white text-lg">🛒 Carrito</a>
                </Link>
                {carrito.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                        {carrito.length}
                    </span>
                )}
            </div> */}
        </nav>
    );
}