import React from 'react';
import './Input.css';

const Input = (props) => {
    let InputElement = null;
    switch(props.elementType)
    {
        case('input'):
            InputElement = <input 
                className="InputElement" 
                {...props.elementConfig}
                value={props.value}
                onChange = {props.changed}/>
            break;
        case('textarea'):
            InputElement = <textarea 
                className="InputElement" 
                {...props.elementConfig}
                value={props.value}
                onChange = {props.changed}/>
            break;
        case('select'):
            InputElement = <select
                className="InputElement"
                value={props.value}
                onChange = {props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}
            </select>
            break;
        default:
            InputElement = <input className="InputElement" {...props.elementConfig} />
    }

    return (
        <div className="Input">
            <label className="Lable">{props.lable}</label>
            {InputElement}
        </div>
    );
}

export default Input;