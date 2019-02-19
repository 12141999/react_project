import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';


const toolbar = (props) => (
    <header className="Toolbar">
        <div className="DrawerToggle" onClick = {props.clicked }>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Logo height="80%" />
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;