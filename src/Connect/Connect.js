import './Connect.css';
import arrows from '../Images/arrows.gif';

function Connect() {
    return (
        <div id="connect">
            <h2 className='spartan-heading'>Let's Connect</h2>
            <p>
                I'm always eager to learn and grow, so if you're interested in connecting, feel free to reach out!
                <br/> <br/>
                Let's make a difference together!
            </p>
            <img src={arrows} id='arrows'/>
        </div>
    )
}

export default Connect;