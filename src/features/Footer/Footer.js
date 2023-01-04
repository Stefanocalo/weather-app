import React from "react";
import './Footer.css';

export const Footer = () => {

    const handleClick = () => {
        document.querySelector('.circle').classList.toggle('active');
        document.querySelector('.pill').classList.toggle('active');
        document.querySelector('.option1').classList.toggle('active');
        document.querySelector('.option2').classList.toggle('active');
    }

    return(
        <div className="footerContainer">
            <p>Made by Stefano Calò</p>
            <div className="toggle">
                <p className="option1">°C</p>
                <div className="pill"></div>
                <div 
                className="circle"
                onClick={() => handleClick()}
                ></div>
                <p className="option2">°F</p>
            </div>
        </div>
    )
}