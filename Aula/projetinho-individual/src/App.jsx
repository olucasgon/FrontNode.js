import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {

  return (
    <Routes>
    <Route path="/" element = {<Login />}/>
    <Route path="/home/:user" element = {<Home/>}/>
    <Route path="*" element = {<><h1>Pagina Não Encontrada</h1><h2>Tente regarregar a pagina</h2></>}/>
  </Routes>
  )
}

export default App
