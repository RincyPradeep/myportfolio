import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

export const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="upper-section">
                    <h1>Huge Announcement!</h1>
                    <p className='close' onClick={props.closeModal}>&times;</p>
                </div>
                <div className="middle-section">
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia totam aliquam, quam qui eaque quo dolorum suscipit eligendi consequatur ad.</p>
                </div>
                <div className="lower-section">
                    <a href="#" className="modal-btn btn-red" onClick={props.closeModal}>Close</a>
                    <a href="http://theleanprogrammer.com/aam/" tatget="_blank" rel="noreferrer" className="modal-btn btn-green">Start Tutorial</a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')   
    )
}
