import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import ConnectWallet from '../connectWallet/ConnectWallet';
import logoLight from '../../images/logo-v8.png';
import logoDark from '../../images/logo-v6.png';
import ModeContext from '../context/ModeContext';


function Header() {
    const { mode, toggleMode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;

    useEffect(() => {
      document.title = `GIV Access - Modo ${mode}`;
    });

    return (
        <header className={`menu-bar ${mode}`}>
          <div className="parte-esq">
            {/* Logo */}
            <img src={logo} alt="logo" className="logo" />

            {/* Nome do grupo */}
            <div className="grupo">
              <p>GIV</p>
              <p>Access</p>
            </div>

            {/*switch button */}
            <div className="mode-info">
              <label className="switch">
                <input type="checkbox" id="mode-switch" onClick={toggleMode} />
                <span className={`slider ${mode}`}></span>
              </label>
              <span>{mode}</span>
            </div>
          </div>
          
          {/*botões de navegação */}
          <nav>
            <ul className={`menu ${mode}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/nfts">NFTs</Link></li>
              <li><Link to="/debug">Debug</Link></li>
              <li><Link to="/explorer">Explorer</Link></li>
              <li><a href="http://localhost:3002">Curso</a></li>
            </ul>
          </nav>

          {/*botão de conectar */}
          <ConnectWallet />

        </header>
    );
  }

export default Header;