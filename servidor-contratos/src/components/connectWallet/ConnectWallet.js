import React, { useState, useContext } from 'react';
import { ethers } from 'ethers'; 
import './ConnectWallet.css';
import ModeContext from '../context/ModeContext';
import faucet from '../../images/faucet.png';


function ConnectWallet() {
    const { mode } = useContext(ModeContext);
    const [enderecoConectado, setEnderecoConectado] = useState('');
    
    async function conectarMetaMask() {
      try {
        if (window.ethereum) {
          // Solicitar permissão ao usuário para acessar a carteira MetaMask
          const provider = new ethers.BrowserProvider(window.ethereum);
          await provider.send('eth_requestAccounts', []);
  
          // Obter o endereço conectado
          const signer = await provider.getSigner();
          const endereco = signer.address;

          if (enderecoConectado) {
            // Desconectar a carteira se já estiver conectada
            setEnderecoConectado('');
            console.log('Desconectado da MetaMask!');

          } else {
            // Conectar a carteira se ainda não estiver conectada
            setEnderecoConectado(formatarEndereco(endereco));
            console.log('Conectado à MetaMask!');
            console.log('Endereço Conectado:', enderecoConectado);
          }
        } else {
          console.error('MetaMask não detectado!');
        }
      } catch (error) {
        console.error('Erro ao conectar à MetaMask:', error);
      }
    }

    function formatarEndereco(endereco) {
      // Verifica se o endereço tem a formatação correta
      if (/^0x[0-9a-fA-F]{40}$/.test(endereco)) {
        const prefixo = endereco.substring(0, 6);
        const sufixo = endereco.substring(endereco.length - 4);

        return `${prefixo}...${sufixo}`;
      } else {
        console.error('Endereço inválido:', endereco);
        return endereco;
      }
    }
  
    return (
      <div className="buttons">
        <button className={`connect-button ${mode}`} onClick={conectarMetaMask}>
          {enderecoConectado ? `${enderecoConectado}` : 'Conectar Carteira'}
        </button>
        {enderecoConectado && (
          <button className="faucet-button">Faucet</button>
        )}
      </div>
    );
  }

  export default ConnectWallet;