import React from 'react'
import { Link } from 'react-router-dom'
import "./FooterLink.css"

function FooterLink({phrase,link,toAddress}) {
    return (
        <div className="footer-container">
            {phrase}
            <Link to={toAddress} className="footer-link">{link}</Link>
        </div>
    )
}

export default FooterLink
