import React from 'react';
import "./style.css"
const Project = (props) => (
    <>
        <li className="project">
            <a href="./project-page.html">
                <img src={props.image} alt={props.title} className="project__img"/>
                <h3 className="project__title">{props.title}</h3>
            </a>
        </li>
    </>
);

export default Project;