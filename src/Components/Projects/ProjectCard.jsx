import React from 'react'
import './Projects.css'

function ProjectCard({projectName,projectDescription,imageUrl,projectUrl,githubUrl}) {
    return (
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className="project-external-link" target="_blank">
                    <img src={imageUrl} alt="project" className="project-image" />
                </a>
            </div>
            <div className="project-details-container">
                <h3 className="project-name">{projectName}</h3>
                <p className="project-details">{projectDescription}</p>
                <a href={githubUrl} className="project-gh-link" target="_blank">View github</a>
            </div>
        </div>
    )
}

export default ProjectCard
