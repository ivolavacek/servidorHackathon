import React from 'react';
import Header from '../components/header/Header';
import Pagina from '../components/pagina/Pagina';
import { ModeProvider } from '../components/context/ModeContext';


const Debug = () => (
  <ModeProvider>
    <Header />
    <Pagina texto="Debug"/>
  </ModeProvider>
);

export default Debug;