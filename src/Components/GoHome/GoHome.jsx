import React from 'react'
import {useHistory} from 'react-router-dom'
import './GoHome.css'

function GoHome() {
    const history = useHistory()
    const navigateToHome =() =>{
        history.push('/')
    }
    
    return (
        <div className="go-home">
            <button onClick={navigateToHome}><i className="fas fa-home"></i></button>
        </div>
    )
}

export default GoHome
