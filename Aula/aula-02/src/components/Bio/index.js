export default function Bio({nome,idade}){
    //Aparece no console nome 
    //console.log(props.nome);
    //console.log(props.Idade);

        return (
            <div>
                <h1>BIO</h1>
                <h2>Nome:{nome}</h2>
                <h2>Idade:{idade}</h2>
            </div>
             
        );
}