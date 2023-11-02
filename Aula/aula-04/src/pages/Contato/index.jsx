import {useNavigate} from "react-router-dom";
import Navegacao from "../MenuNavegação";

export default function Contato(){
    
    const navigate = useNavigate()


    const handleClick = () => {
        navigate ("/login/" + parametro)
    }

    return(
        <>
        <h1>Contatos</h1>

        <button onClick={handleClick}>Clique aqui</button>
         <Navegacao />
        <h2>telefone</h2>
        </>
        );
}
   