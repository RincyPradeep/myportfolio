import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import HomeImage from '../../assets/HomeImage'
import { Modal } from '../Modal/Modal'

function Home() {
    const [showModal,setShowModal] = useState(false);

    useEffect(()=>{
        setShowModal(true)
    },[])

    const closeModal = () =>{
        setShowModal(false)
    }

    return (
        <div className="home-page">
            { showModal && <Modal closeModal={closeModal} /> }
            <div className="home-content">
                <div className="home-text">
                    <h1>Welcome to my portfolio!</h1>
                    <p>This is Rincy, a react.js developer</p>
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
