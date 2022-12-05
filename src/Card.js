import styled from 'styled-components';
import seta_play from './img/seta_play.png'
import seta_virar from './img/seta_virar.png'
export default function Card() {
  const cards = [
    { pergunta: "O que é JSX?", resposta: "Uma extensão da linguagem JavaScript" },
    { pergunta: "O React é __", resposta: "Uma biblioteca JavaScript para construção de interfaces" },
    { pergunta: "Componentes devem iniciar com __", resposta: "Letra maiúscula" },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    { pergunta: "O ReactDOM nos ajuda __", resposta: "Interagindo com a DOM para colocar componentes React na mesma" },
    { pergunta: "Usamos o npm para __", resposta: "Gerenciar os pacotes necessários e suas dependências" },
    { pergunta: "Usamos props para __", resposta: "Passar diferentes informações para componentes" },
    { pergunta: "Usamos estado (state) para __", resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]
  return (
    <Conteudo>
      {cards.map((card, index) => <p  key={card.pergunta}className='pergunta-fechada '>Pergunta {index + 1}
        <img key={card.resposta} src={seta_play} alt="seta play" />
      </p>
      )}
    </Conteudo>)
}
const Conteudo=styled.div`
.pergunta-fechada {
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}
.pergunta-fechada > p {
}
.pergunta-aberta {
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pergunta-aberta > img{
  height:20px ;
  width:30px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.container-botoes {
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: 10px;
}
.container-botoes > button {
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  border: none;
  padding:5px;
}
.verde{
  background:#2FBE34;
}
.amarelo{
  background:#FF922E;
}
.vermelho{
  background:#FF3030;
}
.respondido{
  text-decoration: line-through;
}
.certo{
  color:#2FBE34;
}
.quase{
  color:#FF922E;
}
.errado{
  color:#FF3030;
}
`