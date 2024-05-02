import React from 'react';

import Project from "../components/project/Project";
import {projects} from "../helpers/projectList";

const Projects = (props) => (
    <>
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects.map((proj,index) => {
                        return(
                            <Project key={index} title = {proj.title} description= {proj.description} image = {proj.image} imageBig={proj.imageBig} gitHub={proj.gitHub}/>
                        )
                    })}

                </ul>
            </div>
        </main>
    </>
);

export default Projects;