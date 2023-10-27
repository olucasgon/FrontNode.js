import {useState} from 'react';
import "./style.css";


export default function Constador(){
    //let count = 0;
    const [count, setCount] = useState(0)


    function somar(){
       // count++;
       setCount(count + 1 );
        console.log("Função somar. Contador " + count);
    }

    return( 
        <div className="container">
        <h1>Contador</h1>
        <p className="contador">{count}</p>
        <button onClick={somar}>Adicionar + 1 </button>
        </div>
    );
       
}