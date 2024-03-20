import React, { useContext } from 'react';
import './Pagina.css';
import logoLight from '../../images/logo-v6.png';
import logoDark from '../../images/logo-v8.png';
import ModeContext from '../context/ModeContext';

const Pagina = ( props ) => {
    const { mode } = useContext(ModeContext);
    const logo = mode === 'Light' ? logoLight : logoDark;

    return (
        <div className={`pagina ${mode}`}>
            <h1>GIV Access</h1>
            <h2>{props.texto}</h2>
            <img src={logo} alt="logo" className="logo-pagina" />
        </div>
    );
};

export default Pagina;