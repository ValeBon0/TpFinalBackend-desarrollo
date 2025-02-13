// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Categoria from './components/Categoria';
import Informacion from './components/Informacion';
import Hamburguesas from './components/Hamburguesas';
import Pizzas from './components/Pizzas';
import Sandwiches from './components/Sandwiches'; 
import Tablas from './components/Tablas'; 
import Tacos from './components/Tacos'; 
import Bebidas from './components/Bebidas'; 
import DetalleHamburguesa from './components/DetalleHamburguesa'; 
import DetallePizza from './components/DetallePizza'; 
import DetalleSandwiches from './components/DetalleSandwiches'; 
import DetalleTablas from './components/DetalleTablas'; 
import DetalleTacos from './components/DetalleTacos'; 
import DetalleBebidas from './components/DetalleBebidas'; 

function App() {
  const handleSearch = (searchTerm) => {
    console.log('Buscando:', searchTerm);
  };

  return (
    <Router>
      <div>
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Categoria />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/hamburguesas" element={<Hamburguesas />} />
          <Route path="/hamburguesas/:id" element={<DetalleHamburguesa />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/pizzas/:id" element={<DetallePizza />} />
          <Route path="/sandwiches" element={<Sandwiches />} />
          <Route path="/sandwiches/:id" element={<DetalleSandwiches />} />
          <Route path="/tablas" element={<Tablas />} />
          <Route path="/tablas/:id" element={<DetalleTablas />} /> {/* Ruta para detalle de tablas */}
          <Route path="/tacos" element={<Tacos />} />
          <Route path="/tacos/:id" element={<DetalleTacos />} /> {/* Ruta para detalle de tacos */}
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/bebidas/:id" element={<DetalleBebidas />} /> {/* Ruta para detalle de bebidas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
