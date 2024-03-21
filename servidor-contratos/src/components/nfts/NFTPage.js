import React, { useContext } from 'react';
import './NFT.css';
import NFTMint  from './NFT';
import  { useState } from 'react';

const NFTPage = () => {
    const [apertou, setApertou] = useState(false);
    const [verificarNFT, setVerificarNFT] = useState(false);
    return (
        
        <div className="NFT">
            <h1>GIV Access</h1>
            <button  onClick={()=>{setApertou(true)}}>Mintar</button>
            {apertou && <NFTMint func={"mintar"}/>} 
            <button  onClick={()=>{setVerificarNFT(true)}}>VerificaNFT</button>
            {verificarNFT && <NFTMint func={"verificar"}/>} 
        </div>
    );
};

export default NFTPage;