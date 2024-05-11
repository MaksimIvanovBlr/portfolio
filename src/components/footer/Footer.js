import React from 'react';
import tg from "../../img/icons/tg.svg";
import mail from "../../img/icons/mail.svg";
import github from "../../img/icons/gitHub.svg";
import linkedin from "../../img/icons/linkedIn.svg";
import {mySelf} from "../../storage/portfolioStore/aboutMySelf";
import "./style.css"


const Footer = (props) => (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href={mySelf.contacts.gitHub} target="_blank" rel="noopener"><img src={github} alt="Link"/></a></li>


                    <li className="social__item"><a href={mySelf.contacts.linkedIn} target="_blank" rel="noopener"><img src={linkedin} alt="Link"/></a>
                    </li>

                    <li className="social__item"><a href={mySelf.contacts.emailLink} target="_blank" rel="noopener"><img src={mail} alt="Link"/></a>
                    </li>

                    <li className="social__item"><a href={mySelf.contacts.tgLink} target="_blank" rel="noopener"><img src={tg} alt="Link"/></a></li>

                </ul>
                <div className="copyright">
                    <p>2024 backend developer Maksim Ivanov</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;