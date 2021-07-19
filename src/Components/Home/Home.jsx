import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import HomeImage from '../../assets/HomeImage'
import Typed from 'react-typed';

function Home() {
    return (
        <div className="home-page">
            <div className="home-content">
                <div className="home-text">
                    <h1>Welcome to my portfolio!</h1>
                    <Typed className="typed-text"
                    strings={["This is Rincy","a react.js developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                </div>
                <div className="home-buttons">
                    <Link to="/about" className="button">More about me</Link>
                    <Link to="/myportfolio/contact" className="button">Connect with me</Link>
                </div>               
            </div>
            <div className="home-image">
                <HomeImage />
            </div>
        </div>
    )
}

export default Home
