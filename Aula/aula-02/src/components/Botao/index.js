export default function Botao({ title }){

    function mensagem(){
        console.log("Eu sou o botão " + title )
    }

    return <div>
        <button onClick={mensagem} style={{margin: 10}}>Apagar</button>
        <button onClick={mensagem} style={{margin: 10}}>Editar</button>
        <button onClick={mensagem} style={{margin: 10}}>Concluir</button>
        </div>
}