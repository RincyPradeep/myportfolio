import React from 'react'
import './Projects.css'

function ProjectCard({projectName,projectDescription,imageUrl,projectUrl,githubUrl,frontendGithubUrl,backendGithubUrl}) {
    return (
        <div className="project-card">
            <div className="image-container">
                <img src={imageUrl} alt="project" className="project-image" />
            </div>
            <div className="project-details-container">
                <h3 className="project-name">{projectName}</h3>
                <p className="project-details">{projectDescription}</p>
                <div className='project-links'>
                    {githubUrl &&
                        <a href={githubUrl} className="project-gh-link" target="_blank">View github</a>
                    }
                    {projectUrl && 
                        <a href={projectUrl} className="project-gh-link" target="_blank">View site</a>
                    }
                    {frontendGithubUrl &&
                        <a href={frontendGithubUrl} className="project-gh-link" target="_blank">Frontend code</a>
                    }
                     {backendGithubUrl &&
                        <a href={backendGithubUrl} className="project-gh-link" target="_blank">Backend code</a>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
