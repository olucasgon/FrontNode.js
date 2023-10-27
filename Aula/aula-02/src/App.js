import './App.css';
import Bio from './components/Bio';
import Botao from './components/Botao';

export default function App() {
  const pessoas = [
    {nome: "Lucas" , idade: 19},
    {nome: "Gabriel" , idade: 13},
    {nome: "Roberto" , idade: 12}
  ];
  

  const botoes = [
    {title: {Botao}},
    {title: {Botao}},
    {title: {Botao}},
  ];
  

  return (
    <div className="App">
      <h1> Aula 02</h1>
     
      {/*  <h2>Nós somos</h2>
      <Bio nome={pessoas[0].nome} idade ={pessoas[0].idade}/>
      <Botao title={pessoas[0].nome}/>
      <Bio nome ="Lucas" idade = "19"/>
      <Botao title="Lucas"/>
      <Bio nome={pessoas[2].nome} idade ={pessoas[2].idade}/>
      <Botao title={pessoas[2].nome}/>
      */}
    
      {pessoas.map((item,index) => (
        <Bio key={index}  nome={item.nome} idade={item.idade}/>
      ))}

      {botoes.map((titulo,index) => (
        <Botao key={index}  title={titulo.botoes}/>
      ))}
      
      
    </div>
  );
}
