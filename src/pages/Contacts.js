import React from 'react';
import {mySelf} from "../storage/portfolioStore/aboutMySelf";

const Contacts = (props) => (
    <>
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>{mySelf.contacts.location}</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram </h2>
                        <p><a href={mySelf.contacts.tgLink} target="_blank" rel="noopener">{mySelf.contacts.tg}</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href={mySelf.contacts.emailLink} target="_blank" rel="noopener">{mySelf.contacts.email}</a></p>
                    </li>
                </ul>

            </div>
        </main>
    </>
);

export default Contacts;