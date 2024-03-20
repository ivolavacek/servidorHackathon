import React from 'react';
import Header from '../components/header/Header';
import Pagina from '../components/pagina/Pagina';
import Saldo from '../components/saldo/Saldo';
import { ModeProvider } from '../components/context/ModeContext';


const Nfts = () => (
  <ModeProvider>
    <Header />
    <Pagina texto="NFTs"/>
    <Saldo />
  </ModeProvider>
);

export default Nfts;
