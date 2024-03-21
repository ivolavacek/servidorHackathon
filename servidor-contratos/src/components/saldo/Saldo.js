import React from 'react';
import './Saldo.css';
import { useState, useEffect } from 'react';
import { verificarSaldo } from './FuncSaldo'; // Certifique-se de ajustar o caminho do arquivo conforme necessário

function Saldo(endereco, signer) {
  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    async function fetchSaldo() {
      try {
        const resultado = await verificarSaldo(endereco);

        const saldoNumero =  Number(resultado);
        const saldoDividido = saldoNumero/10**18;
        setSaldo(saldoDividido);

      } catch (error) {
        console.error('Erro ao buscar saldo:', error);
      }
    }

    fetchSaldo();
  }, []);

  return (
    <div className="saldo">
      {saldo !== null ? (
        <p>Saldo: {saldo} GIV</p>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}


export default Saldo;