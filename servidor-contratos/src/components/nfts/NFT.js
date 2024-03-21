import React from 'react';
import './NFT.css';
import { useState, useEffect } from 'react';
import { mintarNFT } from './FuncNFT'; // Certifique-se de ajustar o caminho do arquivo conforme necessário
import { verificarNFT } from './VerificaNFT';

function NFTMint({func})  {
 
  const [possuiNFT, setPossuiNFT] = useState(false);
  const [mintou, setMintou] = useState(null);
  useEffect(() => {
    async function NFT() {
      try {
        if(func == "mintar"){
          console.log(possuiNFT)
        setMintou( await mintarNFT());
        }
        if(func == "verificar"){
        const temNFT = await verificarNFT();
        setPossuiNFT(temNFT);
        }
      

      } catch (error) {
        console.error('Erro ao buscar NFT:', error);
      }
    }

    NFT();
  }, []);

  return (
    <div className="nft">
     {mintou !== false && func === "mintar" && mintou!==null && (
        <p>Você mintou o NFT</p>
      )}
      {possuiNFT !== false && func === "verificar" && (
        <p>Você possui 1 NFT</p>
      )}
      {!mintou && func === "mintar" && mintou!==null && (
        <p>Saldo insuficiente ou transação negada!</p>
      )}
      {!possuiNFT && func === "verificar" && (
        <p>Você não comprou NFT!</p>
      )}
 
    </div>
  );
}

export default NFTMint;