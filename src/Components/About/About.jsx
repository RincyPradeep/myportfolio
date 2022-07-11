import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './About.css';
import aboutImage from '../../assets/about-img.gif'

const About = () =>{
    return(
        <div className="section-container">
            <div className="about-head">
                <Header
                heading="About me"
                details="I am a self taught fullstack developer." />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <p>Hi! I am Rincy Pradeep, a web developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself in web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.</p>
                </div>
                <div className="about-right">
                    <img src={aboutImage} alt="" />
                </div>

            </div>

            <FooterLink phrase="Check out my " link="projects!" toAddress="/Projects" />
        </div>
        
    )
}

export default About;