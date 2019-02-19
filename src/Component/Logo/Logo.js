import React from 'react';
import './Logo.css';
import BurgerLogo from '../../assets/images/132 burger-logo.png'; 

const logo = (props) => (
    <div className="Logo" style={{height : props.height}}>
        <img src = {BurgerLogo} alt="My burger"/> 
    </div>
);

export default logo;