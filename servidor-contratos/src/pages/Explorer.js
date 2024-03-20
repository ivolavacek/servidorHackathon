import React from 'react';
import Header from '../components/header/Header';
import Pagina from '../components/pagina/Pagina';
import { ModeProvider } from '../components/context/ModeContext';


const Explorer = () => (
  <ModeProvider>
    <Header />
    <Pagina texto="Explorer"/>
  </ModeProvider>
);

export default Explorer;