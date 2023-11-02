import { useState } from "react";
import {Link} from "react-router-dom";
import Navegacao from "../MenuNavegação";
import { useNavigate , useParams , useLocation} from 'react-router-dom';

export default function Login(){
    
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
  

    function entrar()  {
      if(login == "" || senha == "" ){
        console.log("Preencha os campos de login e senha")
        
      }else if(login == "lucas" && senha == "123"){ 
        const info = {
          login: login,
          senha: senha
        };
        console.log(info);
        localStorage.setItem("info" , JSON.stringify(info));

        setLogin("");
        setSenha("");

        navigate("/home/"+ login);

      }else{
        console.log("Algo deu errado. Tente novamente")
      }
    }
    
    return (
      <>
        <h1>Pagina de Login</h1>
        <Navegacao />
        <form>
        <input type="text" placeholder="Digite seu nome" value={login} onChange={ (e) => setLogin(e.target.value)}/>
        <br />
        <input type="password" placeholder="Digite sua senha" value={senha} onChange={ (e) => setSenha(e.target.value)}/>
        <br />
        <button type="button" onClick={entrar}>LOGAR</button>
        </form>
      </>
    )

}
