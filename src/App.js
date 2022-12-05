import styled from 'styled-components';
import Logo from './Logo';
import Footer from './Footer';
import Card from './Card';
import {useState} from 'react';
export default function App() {
  const cards = [
    {id:0,pergunta: "O que é JSX?", resposta: "Uma extensão da linguagem JavaScript", aberto:false, virado:false, resultado:"" },
    {id:1,pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces", aberto:false, virado:false, resultado:"" },
    {id:2,pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula", aberto:false, virado:false, resultado:"" },
    {id:3,pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões", aberto:false, virado:false, resultado:"" },
    {id:4,pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma", aberto:false, virado:false, resultado:"" },
    {id:5,pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências", aberto:false, virado:false, resultado:"" },
    {id:6,pergunta: "Usamos props para __", resposta: "Passar diferentes informações para componentes", aberto:false, virado:false, resultado:"" },
    {id:7,pergunta: "Usamos estado (state) para __", resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", aberto:false, virado:false, resultado:"" }
  ]
  
  const [informacaoCards,setInformacaoCards]=useState(cards);
  const [contaRespondidos,setContaRespondidos]=useState(0);
        return (
   <Conteudo>
    <Logo/>
    <Card 
     informacaoCards={informacaoCards}
     setInformacaoCards={setInformacaoCards} 
     contaRespondidos={contaRespondidos} 
     setContaRespondidos={setContaRespondidos}
          
     />
    <Footer contaRespondidos={contaRespondidos}/>
   </Conteudo>
  );
}
const Conteudo=styled.div`
background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`
