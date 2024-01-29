import React from 'react';
import "./Button.css";

const Button = ({ children, clique }) => {
    return (
        <button onClick={clique} className="button">
            {children}
        </button>
    );
}
 
export default Button;