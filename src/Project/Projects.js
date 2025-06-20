import './Projects.css';
import { Row, Col, Container } from 'reactstrap';
import vv from '../Images/vv.png';
import up from '../Images/up.png';
import cc from '../Images/cc.png';

function Projects() {
    return (
        <div className='project-list'>
            <h1 style={{margin: "50px 0"}} className='spartan-heading'>Fullstack Applications</h1>
            <div className='project'>
                <div className='description'>
                    <span className='app spartan-heading'>VoyagerVibes</span> is a travel website designed to reduce your time spent sifting through countless websites 
                    by providing you with the perfect travel itinerary, tailored to your own personal preferences. You input your destination, trip 
                    length and your ideal type of activities and VoyagerVibes will give you an ideal trip itinerary, powered by Google's newest AI, Gemini.
                    <br/> <br/>
                    <b className='spartan-subheading'>Tech Stack:</b> JavaScript, React, Node, Express, PostgreSQL, ReactStrap, RESTful APIs, HTML, CSS
                    <br/> <br/>
                    Deployed using Vercel @ <a href='https://voyagervibes.vercel.app/' target="_blank" rel="noopener noreferrer">voyagervibes.vercel.app</a>
                </div>
                <div className='video'>
                    <img src={vv} className='preview'/>
                </div>
            </div>

            <div className='spacer'></div>

            <div className='project'>
                <div className='description'>
                    <span className='app spartan-heading'>UpWord</span> is an app designed to keep you focused on your upward relationship with God by being grounded in the Word.
                    Need help with memorizing Bible verses? 
                    We have a game for that. Want to compare translations? UpWord has you covered. 
                    Simply want to read a chapter or just keep track of your favorites? You can do that too right from our homepage.
                    <br/> <br/>
                    <b className='spartan-subheading'>Tech Stack:</b> Python, Flask, PostgreSQL, JavaScript, SQLAlchemy, Jinja, RESTful API, HTML, CSS, WTForms, Bcrypt
                    <br/> <br/>
                    Deployed using Vercel @ <a href='https://upword.vercel.app/' target="_blank" rel="noopener noreferrer">upword.vercel.app</a>
                </div>
                <div className='video'>
                    <img src={up} className='preview'/>
                </div>                
            </div>

            <div className='spacer'></div>

            <div className='project'>
                <div className='description'>
                    <span className='app spartan-heading'>CodeCafe</span> is a React app that lists out snack and drink items for a cafe, describing their recipes and how
                    they should be served. It also allows a user to add more items to the snack menu and drink menu. This app has no authentication; everyone can see everything
                    and can add new items.
                    <br/> <br/>
                    <b className='spartan-subheading'>Tech Stack:</b> JavaScript, React, Node, Express, Axios, PostgreSQL, ReactStrap, JSON server, HTML, CSS
                    <br/> <br/>
                    Deployed using Vercel @ <a href='https://codecafe-ns.vercel.app/' target="_blank" rel="noopener noreferrer">codecafe-ns.vercel.app</a>
                </div>
                <div className='video'>
                    <img src={cc} className='preview'/>
                </div>
            </div>

        </div>
    )
}

export default Projects;