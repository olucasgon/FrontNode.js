import {Link} from "react-router-dom";

export default function Navegacao() {
    return (
        <>
        <ul>
            <li> <Link to = "/">HOME</Link></li>
            <li> <Link to = "/login">LOGIN</Link> </li>
            <li> <Link to = "/contato">CONTATO</Link></li>
        </ul>
        </>

    );
  }