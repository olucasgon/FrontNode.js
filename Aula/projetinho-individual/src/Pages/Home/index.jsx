import {useParams} from "react-router-dom";
import Header from "../../Componentes/Header";
import Footer from "../../Componentes/Footer";
import React, { useState } from 'react';
import './style.css';

export default function Home() {
  const { user } = useParams();
  const [search, setSearch] = useState('');
  const [carros, setCarros] = useState([
    'Porsche 911',
    'Porsche Cayenne',
    'Porsche Panamera',
    'Porsche Macan',
    'Porsche Boxster',
  ]);
  const [newCarName, setNewCarName] = useState('');

  const filteredCarros = carros.filter((carro) =>
    carro.toLowerCase().startsWith(search.toLowerCase())
  );

  const AddCar = () => {
    if (newCarName.trim() !== '') {
      setCarros([...carros, newCarName]);
      setNewCarName('');
    }
  };

  const DeleteCar = (carName) => {
    const updatedCarros = carros.filter((carro) => carro !== carName);
    setCarros(updatedCarros);
  };

  return (
    <>
      <Header />
      <h1>Home</h1>
      <h2 style={{ textAlign: "center", color: "white" }}>{user === undefined ? 'Bem vindo!' : 'Olá ' + user}</h2>
      <div className="App">
        <h1>Lista de Espera de Carros</h1>
        <input
          type="text"
          placeholder="Pesquisar carros"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {filteredCarros.map((carro, index) => (
            <li key={index}>
              {carro}
              <button onClick={() => DeleteCar(carro)}>Excluir</button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            placeholder="Nome do carro"
            value={newCarName}
            onChange={(e) => setNewCarName(e.target.value)}
          />
          <button onClick={AddCar}>Adicionar Carro</button>
        </div>
      </div>
      <Footer />
    </>
  );
}