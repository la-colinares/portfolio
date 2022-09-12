import React from 'react';
import { ProjectsData } from '../../AppData';

export default function index() {

    const projects = ProjectsData.projects

    return (
        <section className="container">
            <h1 className="title">{ProjectsData.projects_title}</h1>
            <div className="project-content grid">
                {
                    projects && projects.map((project, index) =>
                        <a key={index} href={project.link} target="_blank">
                            <article className="project-card">
                                <img src={project.image} alt="" className="project-image"/>
                                <div className="project-title">
                                    <h3>{project.title}</h3>
                                </div>
                            </article>
                        </a>
                    )
                }
            </div>

        </section>
    )
}
