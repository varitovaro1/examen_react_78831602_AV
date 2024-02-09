import React from 'react'

function RegistrarPrestamo() {
  return (
    <div class="container mx-auto mt-20">
        <h1 class="text-4xl font-bold mb-8">Registro de Préstamo de Libros</h1>

       
        <form class="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">

            
            <div class="mb-4">
                <label for="libro" class="block text-gray-700 text-sm font-bold mb-2">Libro:</label>
                <select id="libro" name="libro" class="w-full border p-2 rounded-md">
                    
                    <option value="libro1">Libro 1</option>
                    <option value="libro2">Libro 2</option>
                    <option value="libro3">Libro 3</option>
                    
                </select>
            </div>

            
            <div class="mb-4">
                <label for="cliente" class="block text-gray-700 text-sm font-bold mb-2">Cliente:</label>
                <input type="text" id="cliente" name="cliente" class="w-full border p-2 rounded-md" placeholder="Nombre del Cliente"/>
            </div>

            
            <div class="mb-4">
                <label for="fechaPrestamo" class="block text-gray-700 text-sm font-bold mb-2">Fecha del Préstamo:</label>
                <input type="date" id="fechaPrestamo" name="fechaPrestamo" class="w-full border p-2 rounded-md"/>
            </div>

            
            <div class="mb-4">
                <label for="duracionPrestamo" class="block text-gray-700 text-sm font-bold mb-2">Duración del Préstamo (días):</label>
                <input type="number" id="duracionPrestamo" name="duracionPrestamo" class="w-full border p-2 rounded-md" max="99"/>
            </div>

            
            <div class="mb-4">
                <label for="estadoLibro" class="block text-gray-700 text-sm font-bold mb-2">Estado del Libro:</label>
                <textarea id="estadoLibro" name="estadoLibro" class="w-full border p-2 rounded-md" rows="4" maxlength="200" placeholder="Ingrese el estado del libro"></textarea>
            </div>

            
            <div class="flex justify-end">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Registrar Préstamo</button>
            </div>
        </form>
    </div>
  )
}

export default RegistrarPrestamo
