import './Intro.css';
import headshot from '../Images/headshot.png';

function Intro() {
    return (
        <div id="intro">
            <div>
                <img src={headshot} id='headshot' />
                <div id='welcome' className='spartan-intro'>
                    HELLO! 
                    <br/>
                    <span style={{fontSize: 'xx-large', lineHeight: '1.5'}} className='spartan-heading'>I'm Nathan</span>
                    <br/>
                    Software Engineer
                </div>                
            </div>

            <div id='bio' className='spartan-intro'>
                <h1 className='spartan-heading'>About Me</h1>
                
                I am an experienced software developer with a focus on full-stack development and a passion for delivering end-to-end solutions.
                Leveraging a solid engineering background with hands-on experience in electrical and biomedical engineering, I bring a unique 
                perspective to software development, blending technical proficiency with practical insights.
                <br/> <br/>
                Over several years in the engineering industry, coupled with dedicated coursework and diverse projects, I've honed my skills across a wide range
                of technologies, including Javascript, Python, CSS, HTML, React, SQL, C++, Assembly, and Java. With 
                expertise in both front-end and back-end technologies, I thrive in dynamic environments where innovation and collaboration are 
                paramount.
                <br/> <br/>
                Beyond the world of software, I enjoy an active lifestyle - whether surfing waves along the local coastline, competing on the 
                pickleball courts, or playing soccer. Recently, I've embarked on a journey to learn Spanish, further enriching my 
                personal and professional horizons.
                <br/> <br/>
                <a href='https://drive.google.com/drive/folders/1QNlJ2RjhsyWJwFxrHFw0entk77C9Dgk5?usp=sharing' target="_blank" rel="noopener noreferrer">My Resume</a>

            </div>
            
       </div>
    )
}

export default Intro;