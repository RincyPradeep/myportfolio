import React from 'react'
import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import './Contact.css'

function Contact() {
    return (
        <div className="section-container">
            <Header heading="Get in touch" details="Interested to collaborate? Feel free to drop me an email." />
            {/* form */}
            <div className="contact-form-container">
                <form className="contact-form"  
                      action="https://formspree.io/f/myylddvz"
                      method="POST">
                    <input type="text" name="_replyto" placeholder="Your email Id" className="input-field email-input" />
                    <textarea type="text" name="message" placeholder="Message" className="input-field message-input" />
                    <button type="submit" className="contact-btn">Send Email</button>
                </form>
                
            </div>
            {/* social media icons */}
            <div className="social-icons-container">
                <div className="social-icon">
                    <a href="https://github.com/RincyPradeep" target="_blank">
                        <img src={github} alt="github" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/rincypradeep/" target="_blank">
                        <img src={linkedin} alt="Linked in" />
                    </a>
                </div>           
            </div>
            
            <FooterLink phrase="Read more " link="about me!" toAddress="/myportfolio/about" />
        </div>
    )
}

export default Contact
