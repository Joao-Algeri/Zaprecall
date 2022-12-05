import styled from 'styled-components';
import Logo from './Logo';
import Footer from './Footer';
import Card from './Card';
import {useState} from 'react';
export default function App() {
    return (
   <Conteudo>
    <Logo/>
    <Card />
    <Footer/>
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
