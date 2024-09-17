import React from 'react';
import '../../styles/Button.css';

const Button = ({text, onClick, icon, className}) => {


    return (
        <button className={className} onClick={onClick}>
            {text}
            <img src={icon} alt="" />
        </button>
    );
};

export default Button;