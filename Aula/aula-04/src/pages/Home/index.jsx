import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import Navegacao from "../MenuNavegação";

export default function Home() {
  const {user} = useParams()

  return (
    <>
        <h1>Home</h1>
        <h2>{user == undefined ? "Bem vindo!" : "Olá " + user }</h2>
        <Navegacao/>
    </>

  );
}