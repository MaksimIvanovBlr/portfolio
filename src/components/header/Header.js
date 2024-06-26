import React from 'react';
import "./style.css"

const Header = (props) => (
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Maksim</em></strong><br/>
                I am a backend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" className="btn">Download CV</a>
        </div>
    </header>
);

export default Header;