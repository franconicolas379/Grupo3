"use client";

export default function Footer(){
    return (
        <footer className="flex justify-center w-full h-32 bg-blue-900">
            <div className="w-[1200px] flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuZYs2Qa6qEV98OYq98NLLGB7r4iH2uAPIA&s" // Cambia esto a la ruta de tu imagen
                        alt="Devlights"
                        className="h-16 mr-4"
                    />
                    <span className="text-2xl text-white">Bootcamp Devlights</span>
                </div>
                <div className="text-sm text-white flex flex-col gap-1">
                    <p 
                        className="text-xl" 
                    >
                        Grupo 3
                    </p>
                    <p className="text-xl">CopyRight 2024</p>
                </div>
                <div className="text-sm text-white flex flex-col gap-1">
                <p className="text-xl">Medrano Franco Nicolas</p>
                    <p className="text-xl" > Guazo Alfredo nicolas </p>
                    <p className="text-xl">Goytia Jeremias Jesus</p>
                </div>
            </div>
        </footer>
    );
};