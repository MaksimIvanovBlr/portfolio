import React from 'react';
import {useParams} from "react-router-dom"
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "../helpers/projectList"

const ProjectPage = (props) => {
    const {id} = useParams()
    const project = projects[id-1]
    return(

  <>
      <main className="section">
          <div className="container">
              <div className="project-details">
                <p>{id}</p>

                  <h1 className="title-1">{project.title}</h1>

                  <img src={project.imageBig} alt="" className="project-details__cover" />

                      <div className="project-details__desc">
                          <p>{project.description}</p>
                      </div>

                  {project.gitHub && (<BtnGitHub link="https://github.com/MaksimIvanovBlr/portfolio"/>)}

              </div>
          </div>
      </main>

  </>
)};

export default ProjectPage;