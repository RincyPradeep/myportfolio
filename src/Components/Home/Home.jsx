import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import HomeImage from '../../assets/HomeImage'
import { TypeAnimation } from "react-type-animation";


function Home() {
    return (
        <div className="home-page">
            <div className="home-content">
                <div className="home-text">
                    <h1>Welcome to my portfolio!</h1>
                    <TypeAnimation
                        sequence={[
                            "This is Rincy Pradeep",
                            2000,
                            "a fullstack developer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={40}
                        style={{ fontSize: "24px", display: "inline-block" }}
                        repeat={Infinity}
                    />
                </div>
                <div className="home-buttons">
                    <Link to="/about" className="button">More about me</Link>
                    <Link to="/contact" className="button">Connect with me</Link>
                </div>               
            </div>
            <div className="home-image">
                <HomeImage />
            </div>
        </div>
    )
}

export default Home
