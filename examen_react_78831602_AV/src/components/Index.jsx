import React from 'react'
import { Link } from "react-router-dom";

function Index() {
  return (
    <div class="container mx-auto mt-20 mb-5">
        <h1 class="text-4xl font-bold mb-4">Bienvenido a nuestra Tienda de Libros</h1>

        
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
           
            <div class="bg-white p-6 rounded-lg shadow-md mb-5">
                <h2 class="text-xl font-bold mb-2">Título del Libro 1</h2>
                <p class="text-gray-700 mb-4">Descripción breve del libro. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/registrar-prestamos">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Solicitar préstamo</button>
                </Link>
            </div>

            
            <div class="bg-white p-6 rounded-lg shadow-md mb-5">
                <h2 class="text-xl font-bold mb-2">Título del Libro 2</h2>
                <p class="text-gray-700 mb-4">Descripción breve del libro. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/registrar-prestamos">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Solicitar préstamo</button>
                </Link>
            </div>

            
            <div class="bg-white p-6 rounded-lg shadow-md mb-5">
                <h2 class="text-xl font-bold mb-2">Título del Libro 3</h2>
                <p class="text-gray-700 mb-4">Descripción breve del libro. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/registrar-prestamos">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Solicitar préstamo</button>
                </Link>
            </div>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5">
           
            <div class="bg-white p-6 rounded-lg shadow-md mb-5">
                <h2 class="text-xl font-bold mb-2">Título del Libro 1</h2>
                <p class="text-gray-700 mb-4">Descripción breve del libro. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/registrar-prestamos">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Solicitar préstamo</button>
                </Link>
            </div>

            
            <div class="bg-white p-6 rounded-lg shadow-md mb-5">
                <h2 class="text-xl font-bold mb-2">Título del Libro 2</h2>
                <p class="text-gray-700 mb-4">Descripción breve del libro. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/registrar-prestamos">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Solicitar préstamo</button>
                </Link>
            </div>

            
            <div class="bg-white p-6 rounded-lg shadow-md mb-5">
                <h2 class="text-xl font-bold mb-2">Título del Libro 3</h2>
                <p class="text-gray-700 mb-4">Descripción breve del libro. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/registrar-prestamos">
                <Link to="/registrar-prestamos">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Solicitar préstamo</button>
                </Link>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Index
