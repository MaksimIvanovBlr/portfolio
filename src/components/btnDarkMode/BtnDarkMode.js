import React from 'react';
import "./style.css"
import sun from "./sun.svg";
import moon from "./moon.svg";

const BtnDarkMode = (props) => {

    return(
        <button className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    )
    }

;

export default BtnDarkMode;