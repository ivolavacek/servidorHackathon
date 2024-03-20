import React from 'react';
import Header from '../components/header/Header';
import Pagina from '../components/pagina/Pagina';
import { ModeProvider } from '../components/context/ModeContext';


const Home = () => (
  <ModeProvider>
    <Header />
    <Pagina texto="Home"/>
  </ModeProvider>
);

export default Home;
