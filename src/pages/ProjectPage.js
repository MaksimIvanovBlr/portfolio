import React from 'react';
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
const ProjectPage = (props) => (
  <>
      <main className="section">
          <div className="container">
              <div className="project-details">

                  <h1 className="title-1">Video service</h1>

                  <img src="./img/projects/02-big.jpg" alt="" className="project-details__cover" />

                      <div className="project-details__desc">
                          <p>Skills: React, Node.js, MongoDB</p>
                      </div>

                  <BtnGitHub link="https://github.com/MaksimIvanovBlr/portfolio"/>

              </div>
          </div>
      </main>

  </>
);

export default ProjectPage;