import './Connect.css';
import arrows from '../Images/arrows.gif';

function Connect() {
    return (
        <div id="connect">
            <h2 className='spartan-heading'>Let's Connect</h2>
            <p>
                I'm always eager to learn and grow, so if you're interested in connecting, feel free to reach out!
                <br/> <br/>
                Here is my <a href='https://drive.google.com/drive/folders/1QNlJ2RjhsyWJwFxrHFw0entk77C9Dgk5?usp=sharing' target="_blank" rel="noopener noreferrer">resume</a>.
                <br/> <br/>
                Let's make a difference together!
            </p>
            <img src={arrows} id='arrows'/>
        </div>
    )
}

export default Connect;