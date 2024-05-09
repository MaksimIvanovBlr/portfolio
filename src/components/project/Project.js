import React from 'react';
import "./style.css"
import { useNavigate } from 'react-router-dom';
import {PROJECT_PAGE_ROUTE} from "../../utils/consts";

const Project = (props) => {
    const navigate = useNavigate()
    return(

        <li onClick={() => navigate(PROJECT_PAGE_ROUTE + '/' + props.index)} className="project">
                <img src={props.image} alt={props.title} className="project__img"/>
                <h3 className="project__title">{props.title}</h3>
        </li>
)};

export default Project;