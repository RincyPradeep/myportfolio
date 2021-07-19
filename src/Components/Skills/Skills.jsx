import React from 'react'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import './Skills.css'
import {skillsList} from '../../skillsData'

function Skills() {
    return (
        <div className="section-container">
            <Header heading="My Skills" details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I have worked with!" />
            <div className="skillcard-container">
                {skillsList.map((skill) => {
                    console.log("URL:",skill.skillUrl)
                    return(
                        <div className="skill">
                            <img src={skill.skillUrl} alt="skill" />
                            <p>{skill.skillName}</p>
                        </div>
                    )
                })
            }

            </div>
            <FooterLink phrase="Get in " link="touch" toAddress="/contact" />
        </div>
    )
}

export default Skills
