import styled from 'styled-components';
import seta_play from './img/seta_play.png'
import seta_virar from './img/seta_virar.png'
import icone_certo from './img/icone_certo.png'
import icone_quase from './img/icone_quase.png'
import icone_errado from './img/icone_erro.png'
import Botoes from './Botoes';
export default function Card({ informacaoCards, setInformacaoCards, contaRespondidos, setContaRespondidos }) {



  function PerguntaFechada({ card, informacaoCards, setInformacaoCards }) {

    function viraCarta(id) {
      let arrayAbertoOuFechado = [];
      informacaoCards.map((carta) => arrayAbertoOuFechado.push(carta.aberto))
      const temCartaAberta = arrayAbertoOuFechado.includes(true)
      if (!temCartaAberta) {
        const novaInformacao = [...informacaoCards]
        novaInformacao[id].aberto = true;
        setInformacaoCards(novaInformacao)
      }
    }
    function Resultado() {
      return (

        card.resultado === "certo" ? <img src={icone_certo} alt="icone certo" />
          :
          card.resultado === "quase" ? <img src={icone_quase} alt="icone quase" />
            :
            card.resultado === "errado" ? <img src={icone_errado} alt="icone errado" />
              :
              <></>
      )
    }
    return (card.resultado === "" ?
      <p className='pergunta-fechada '>Pergunta {card.id + 1}
        <img onClick={() => viraCarta(card.id)} src={seta_play} alt="seta play" />
      </p>
      :
      <p className={`pergunta-fechada ${card.resultado}  `}>Pergunta {card.id + 1}
        <Resultado />
      </p>
    )
  }
  function PerguntaAberta({ card, informacaoCards, setInformacaoCards }) {
    function MostrarResposta(id, virado) {
      if (virado === false) {

        const novasInformacoes = [...informacaoCards]
        novasInformacoes[id].virado = true;
        setInformacaoCards(novasInformacoes)
      }
    }
    return (card.virado === false ?
      <p className='pergunta-aberta'>{card.pergunta}
        <img onClick={() => MostrarResposta(card.id, card.virado)} src={seta_virar} alt="seta virar" />
      </p>
      :
      <p className='pergunta-aberta'>{card.pergunta}
        <Botoes id={card.id} informacaoCards={informacaoCards} setInformacaoCards={setInformacaoCards} contaRespondidos={contaRespondidos} setContaRespondidos={setContaRespondidos} />
      </p>
    )
  }
  return (
    <Conteudo>
      {informacaoCards.map((card) => card.aberto == false ? <PerguntaFechada card={card} informacaoCards={informacaoCards} setInformacaoCards={setInformacaoCards} /> : <PerguntaAberta card={card} informacaoCards={informacaoCards} setInformacaoCards={setInformacaoCards} />)}

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
  text-decoration: line-through;
}
.quase{
  color:#FF922E;
  text-decoration: line-through;
}
.errado{
  color:#FF3030;
  text-decoration: line-through;
}
`