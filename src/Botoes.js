import styled from 'styled-components';
export default function Botoes({id,informacaoCards,setInformacaoCards,contaRespondidos,setContaRespondidos}){
    function RespondePergunta(resposta){
        setContaRespondidos(contaRespondidos+1)
        const novaInformacao=[...informacaoCards]
        novaInformacao[id].aberto=false;
        novaInformacao[id].resultado=resposta;
        console.log(novaInformacao);
        setInformacaoCards(novaInformacao);
    }
    return(
        <Conteudo>
        <div className='container-botoes'>
          <button onClick={()=>RespondePergunta("errado")}className='vermelho'>Não lembrei</button>
          <button onClick={()=>RespondePergunta("quase")}className='amarelo'>Quase não lembrei</button>
          <button onClick={()=>RespondePergunta("certo")}className='verde'>Zap!</button>
        </div>
        </Conteudo>
    )
}
const Conteudo=styled.div`
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
}`