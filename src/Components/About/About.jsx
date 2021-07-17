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
                details="I am a self taught react.js developer." />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae tempora magni fuga ea mollitia iusto, accusamus ipsam quisquam aspernatur. Atque dolorum animi facilis doloremque mollitia molestias aliquam porro at corrupti, fuga ducimus sequi unde vitae eum aperiam impedit debitis numquam? Ex accusantium maxime doloribus sunt, consequatur consequuntur aspernatur nobis possimus.</p>
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