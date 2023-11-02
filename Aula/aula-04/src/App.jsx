import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import { Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";



export default function App() {
  return(
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/home/:user" element = {<Home />}/>
      <Route path="/login" element = {<Login />}/>
      <Route path="/login/:parametro" element = {<Login />}/>
      <Route path="/contato" element = {<Contato/>} />
      <Route path="*" element = {<h1>Pagina Não Encontarda</h1>}/>
    </Routes>
  );
}