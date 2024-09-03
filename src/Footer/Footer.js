import './Footer.css';
import github from '../Images/github.png';
import linkedin from '../Images/linkedin.png';
import email from '../Images/email.png';

function Footer() {
    return (
        <div id="footer">
            <a href='https://github.com/NSoucier' target="_blank" rel="noopener noreferrer"><img src={github} className='socials' alt='github link'/> </a>
            <a href='https://www.linkedin.com/in/soucier/' target="_blank" rel="noopener noreferrer"><img src={linkedin} className='socials' alt='linkedin link'/> </a>
            <a href='mailto:soucienp@gmail.com'><img src={email} className='socials' alt='email link'/> </a>
        </div>
    )
}

export default Footer;