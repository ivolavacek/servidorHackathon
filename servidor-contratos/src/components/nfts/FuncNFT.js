
const contractABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "balanceToken",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getContractAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "locked",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "safeMint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "ownsToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
const { ethers } = require('ethers');
const { verificarSaldo } = require('../saldo/FuncSaldo');
const { transferirCompraNFT } = require('../transferERC20/FuncTransfer');
const { verificarNFT } = require('./VerificaNFT');

const contractAddressERC721 = '0x275Fa8A81baEf004f1072A60b57e33e2B09530e5';

const provider = new ethers.JsonRpcProvider('https://sepolia.optimism.io');
const privateKey = '3b56ddf543af869f551d34914c35e951d579812327de3693154e6a3fbf6ab2e2';
const wallet = new ethers.Wallet(privateKey, provider);
const contractERC721 = new ethers.Contract(contractAddressERC721, contractABI, wallet);

async function mintarNFT() {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const saldo = await verificarSaldo(signer);
    const saldoNumerico = Number(saldo);
    const resultado = false;
    const temNFT = await verificarNFT();
    if(saldoNumerico>50*10**18 && temNFT == false){
        const transferiu = await transferirCompraNFT();
            
    if(transferiu){
     resultado = await contractERC721.safeMint(signer.address, "https://givaccess.com/1115002");
    }
    }else{
        window.alert("Saldo insuficiente, transação não realizada.")
    }
 
    console.log(saldoNumerico);
    console.log('Resultado da função:', resultado);
    return resultado
  } catch (error) {
    console.error('Erro ao chamar a função:', error);
  }
}

module.exports = {
    mintarNFT
  };
