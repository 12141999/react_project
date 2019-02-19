import React from 'react';
import './Buildcontrol.css';

const buildcontrol = (props) => (
    <div className="BuildControl">
        <div className="Lable">{props.lable}</div>
        <button className="Less" onClick={props.deleted} disabled={props.disabled}>Less</button>
        <button className="More" onClick={props.added}>More</button>
    </div>
);

export default buildcontrol;