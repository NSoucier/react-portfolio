import './Skills.css';
import { Card, CardBody, CardText, Container, Row, Col } from 'reactstrap';
import js from '../Images/js.png';
import py from '../Images/py.png';
import node from '../Images/node.png';
import react from '../Images/react.png';
import ex from '../Images/ex.png';
import psql from '../Images/psql.png';
import html from '../Images/html.png';
import css from '../Images/css.png';

function Skills() {
    return (
        <div id='skills'>
            <h1 className='spartan-heading'>Skills</h1>
                <Row>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={js} alt='JavaScript' className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={py} alt='Python' className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={node} alt='Node' className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={react} alt='React' className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={ex} alt='Express' className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={psql} alt='PostgreSQL' className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={html} alt='HTML' className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={css} alt='CSS' className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>                                                                                                                        
                </Row>
            <p>
                <b className='spartan-subheading'>Other skills:</b> TypeScript, Angular, Vue.js, Playwright, Selenium, .NET, Redux, C/C++, Java, C#, Assembly, object-oriented programming, data structures, Git, Jira, Agile, SolidWorks, MATLAB, CRM
            </p>
            <p>
                <b className='spartan-subheading'>Spoken languages:</b> English, French (Bilingual), Spanish (Basic)
            </p>
        </div>
    )
}

export default Skills;