import React from 'react';
import Header from '../components/header/Header';
import Pagina from '../components/pagina/Pagina';
import NFTPage from '../components/nfts/NFTPage';

import { ModeProvider } from '../components/context/ModeContext';


const Nfts = () => (
  <ModeProvider>
    <Header />
    {/* <Pagina texto="NFTs"/> */}
    <NFTPage />
  </ModeProvider>

);

export default Nfts;
