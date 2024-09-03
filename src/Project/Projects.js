import './Projects.css';
import { Row, Col, Container } from 'reactstrap';
import vv from '../Images/vv.png';
import up from '../Images/up.png';

function Projects() {
    return (
        <div className='project-list'>
            <h1 style={{margin: "100px 0"}}>Fullstack applications</h1>
            <div className='project'>
                <div className='description'>
                    <span className='app'>VoyagerVibes</span> is a travel website designed to reduce your time spent sifting through countless websites 
                    by providing you with the perfect travel itinerary, tailored to your own personal preferences. You input your destination, trip 
                    length and your ideal type of activities and VoyagerVibes will give you an ideal trip itinerary, powered by Google's newest AI, Gemini.
                    <br/> <br/>
                    <b>Tech Stack:</b> JavaScript, React, Node, Express, PostgreSQL, ReactStrap, RESTful APIs, HTML, CSS
                    <br/> <br/>
                    Deployed using Vercel @ <a href='https://voyagervibes.vercel.app/' target="_blank" rel="noopener noreferrer">voyagervibes.vercel.app</a>
                </div>
                <div className='video'><img src={vv} className='preview'/></div>
                {/* <div id='fade'></div> */}
            </div>
            <div className='spacer'></div>
            <div className='project'>
                <div className='video'><img src={up} className='preview'/></div>
                <div className='description'>
                    <span className='app'>UpWord</span> is an app designed to keep you focused on your upward relationship with God by being grounded in the Word. This app will help you to 
                    keep track of your favorite verses and allow you to search for any word in the Bible. Need help with memorizing those Bible verses? 
                    We have a game for that. Want to see a side-by-side comparison of a passage using two different versions? UpWord has you covered. 
                    Simply want to read a passage from the Bible? You can do that too right from our homepage.
                    <br/> <br/>
                    <b>Tech Stack:</b> Python, Flask, PostreSQL, JavaScript, SQLAlchemy, Jinja, RESTful APIs, HTML, CSS, WTForms, Boostrap, and Bcrypt
                    <br/> <br/>
                    Deployed using Render @ <a href='https://upword.onrender.com/' target="_blank" rel="noopener noreferrer">upword.onrender.com</a>
                </div>

            </div>
        </div>
    )
}

export default Projects;