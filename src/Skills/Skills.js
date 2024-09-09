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
            <h1>Skills</h1>
                <Row>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={js} className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={py} className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={node} className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={react} className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={ex} className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={psql} className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={html} className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='skillCard'>
                            <CardBody>
                                <CardText>
                                    <img src={css} className='logos' />
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>                                                                                                                        
                </Row>
            <p>
                <b>Other skills:</b> TypeScript, Angular, Redux, C/C++, Java, Git, Assembly, Jira, Agile, SolidWorks, MATLAB, CRM
            </p>
            <p>
                <b>Spoken languages:</b> English, French (Bilingual), Spanish (Basic)
            </p>
        </div>
    )
}

export default Skills;