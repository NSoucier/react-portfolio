import './Intro.css';
import headshot from '../headshot.png';

function Intro() {
    return (
        <div id="intro">
            <img src={headshot} id='headshot' />
            <p id='bio'>
                &emsp; I am an experienced software developer with a focus on full-stack development and a passion for delivering end-to-end solutions.
                Leveraging a solid engineering background with hands-on experience in electrical and biomedical engineering, I bring a unique 
                perspective to software development, blending technical proficiency with practical insights.
                <br/> <br/>
                &emsp; Over several years in the industry, coupled with dedicated coursework and diverse projects, I've honed my skills across a wide range
                of technologies, including Javascript, Python, CSS, HTML, React, Node.js, Express.js, SQL, JQuery, C++, Assembly, and Java. With 
                expertise in both front-end and back-end technologies, I thrive in dynamic environments where innovation and collaboration are 
                paramount.
                <br/> <br/>
                &emsp; Beyond the world of software, I enjoy an active lifestyle, whether catching waves along the local coastline, competing on the 
                pickleball court, or kicking a soccer ball around. Recently, I've embarked on a journey to learn Spanish, further enriching my 
                personal and professional horizons.
                <br/> <br/>
            </p>
            <p>
                Tech stack
            </p>
            <div className='glow'></div>
        </div>
    )
}

export default Intro;