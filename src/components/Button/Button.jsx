import React from 'react';
import '../../styles/Button.css';

const Button = ({text, onClick, icon, className, disabled}) => {


    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {text}
            <img src={icon} alt="" />
        </button>
    );
};

export default Button;