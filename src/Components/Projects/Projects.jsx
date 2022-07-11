import React from 'react'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import {ProjectsList} from '../../ProjectsData'
import './Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <div className="section-container">
            <Header heading="My Projects" details="Here are a few cool things I've worked on, do check them out!" />
            
            <div className="project-cards-container">
                {
                    ProjectsList.map((project)=>{
                        return(
                        <ProjectCard 
                            projectName={project.projectName}
                            projectDescription={project.projectDescription}
                            imageUrl={project.imageUrl}
                            projectUrl={project.projectUrl}
                            githubUrl={project.githubUrl}
                            frontendGithubUrl={project.frontendGithubUrl}
                            backendGithubUrl ={project.backendGithubUrl} />
                        )
                    })
                }
            </div>
            <FooterLink phrase="Check out " link="my skills!" toAddress="/skills" />
        </div>
    )
}

export default Projects
