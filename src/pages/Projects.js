import React from 'react';

import Project from "../components/project/Project";
import {projects} from "../storage/portfolioStore/projectList";

const Projects = (props) => (
    <>
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects.map((proj) => {
                        return(
                            <Project
                                key={proj.id}
                                title = {proj.title}
                                description= {proj.description}
                                image = {proj.image}
                                imageBig={proj.imageBig}
                                gitHub={proj.gitHub}
                                index = {proj.id}
                            />
                        )
                    })}

                </ul>
            </div>
        </main>
    </>
);

export default Projects;