import React, { useState } from 'react';

function Reportes() {
  // Estado para controlar la visibilidad del modal
  const [modalVisible, setModalVisible] = useState(false);

  // Estado para almacenar los detalles del préstamo actual
  const [prestamoActual, setPrestamoActual] = useState({
    cliente: '',
    duracion: '',
    fecha: '',
    estado: '',
  });

  // Función para mostrar el modal con detalles del préstamo
  const mostrarDetalles = (cliente, duracion, fecha, estado) => {
    setPrestamoActual({ cliente, duracion, fecha, estado });
    setModalVisible(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalVisible(false);
  };

  // Lista de clientes
  const clientes = [
    { nombre: 'Cliente 1', duracion: '7 días', fecha: '2022-02-10', estado: 'Vencida' },
    { nombre: 'Cliente 2', duracion: '5 días', fecha: '2022-02-15', estado: 'Vencida' },
    { nombre: 'Cliente 3', duracion: '8 días', fecha: '2022-02-20', estado: 'Vencida' },
    { nombre: 'Cliente 4', duracion: '6 días', fecha: '2022-02-25', estado: 'Vencida' },
    { nombre: 'Cliente 5', duracion: '9 días', fecha: '2022-03-01', estado: 'Vencida' },
  ];

  // Lista de libros prestados por semana (datos de ejemplo)
  const librosSemana = [
    { titulo: 'Libro 1', cliente: 'Cliente 1', duracion: '7 días', fecha: '2022-02-10' },
    { titulo: 'Libro 2', cliente: 'Cliente 2', duracion: '5 días', fecha: '2022-02-15' },
    // Agrega más libros según sea necesario
  ];

  // Lista de libros prestados por mes (datos de ejemplo)
  const librosMes = [
    { titulo: 'Libro 3', cliente: 'Cliente 3', duracion: '8 días', fecha: '2022-02-20' },
    { titulo: 'Libro 4', cliente: 'Cliente 4', duracion: '6 días', fecha: '2022-02-25' },
    { titulo: 'Libro 5', cliente: 'Cliente 5', duracion: '9 días', fecha: '2022-03-01' },
    // Agrega más libros según sea necesario
  ];

  // Función para renderizar las tarjetas de libros prestados
  const renderizarTarjetasLibros = (libros) => {
    return libros.map((libro, index) => (
      <div key={index} className="flex bg-white p-4 rounded-md shadow-md mb-4">
        <div className="flex-shrink-0 w-1/2">
          <h2 className="text-lg font-bold mb-2">{libro.titulo}</h2>
          <p className="text-gray-700 mb-2">Cliente: {libro.cliente}</p>
          <p className="text-gray-700 mb-2">Duración: {libro.duracion}</p>
          <p className="text-gray-700 mb-2">Fecha: {libro.fecha}</p>
        </div>
        <div className="flex-shrink-0 w-1/2 flex items-end justify-end">
          <button onClick={() => mostrarDetalles(libro.cliente, libro.duracion, libro.fecha, libro.estado)} className="bg-gray-900 text-white px-4 py-2 rounded-md">Ver Detalles</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto mt-20 mb-8">
      <h1 className="text-4xl font-bold mb-8">Clientes con Duración de Préstamo Vencida</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clientes.map((cliente, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">{cliente.nombre}</h2>
            <p className="text-gray-700 mb-4">Duración del préstamo: <span className="text-red-500">{cliente.estado}</span></p>
            <button onClick={() => mostrarDetalles(cliente.nombre, cliente.duracion, cliente.fecha, cliente.estado)} className="bg-gray-900 text-white px-4 py-2 rounded-md">Ver Detalles</button>
          </div>
        ))}
      </div>

      {/* Lista de libros prestados por semana */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Libros Prestados por Semana</h2>
        {renderizarTarjetasLibros(librosSemana)}
      </div>

      {/* Lista de libros prestados por mes */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Libros Prestados por Mes</h2>
        {renderizarTarjetasLibros(librosMes)}
      </div>

      {/* Modal de Detalles del Préstamo */}
      {modalVisible && (
        <div className="modal fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <h1 className="text-xl font-bold mb-4">Detalles del Préstamo</h1>
              <p>Cliente: {prestamoActual.cliente}</p>
              <p>Duración: {prestamoActual.duracion}</p>
              <p>Fecha del Préstamo: {prestamoActual.fecha}</p>
              <p>Estado: {prestamoActual.estado}</p>
              <button onClick={cerrarModal} className="bg-gray-900 text-white px-4 py-2 rounded-md mt-4">Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reportes;
