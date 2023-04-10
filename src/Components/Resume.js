import React from 'react';
import { Container, Col, Row, Card, CardTitle, CardBody } from 'reactstrap';
import "../css/resume.css";


const Resume = () => {
    return (
        <Container
            fluid
            className="resume-container">
            <Card
                color="dark"
                outline
            >
                <CardTitle
                    className="bg-light border text-center" tag="h1">
                    Terrence Budnik
                </CardTitle>
                <Row>
                    <Col className="text-muted text-center">
                        <h6>terrence.budnik@gmail.com</h6>
                    </Col>
                    <Col className="text-muted text-center">
                        <h6>630-205-0292</h6>
                    </Col>
                    <Col className="text-muted text-center"
                        tag="h6">
                        <h6>Chicago, IL</h6>
                    </Col>
                </Row>

                <CardBody>
                    <Row>
                        <Col>
                            <p className="text-center">
                                Full-stack web developer with technical skills and a background that allows keen insight in building unique user friendly sites.  Earned certificate through Northwestern University’s full time and intensive bootcamp in web development. Self-starter and strong communicator with a devotion for learning, and on a constant mission for improvement . Known for leadership abilities, demonstrated in history of promotions to management positions-project and business.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="bg-light border text-center">Technical Skills</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>Front-End: HTML, CSS,  Javascript, React, jQuery, Bootstrap, Materialize, Foundation</li>
                                <li>Back-End: Node.js, Express, Jest, RESTful APIs, SQL, MySQL, MongoDB, GraphQL MS Excel</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="bg-light border text-center">Work Experience</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Recruiting Manager</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>Connect Search, LLC</h6>
                        </Col>
                        <Col>
                            <h6>Chicago, IL</h6>
                        </Col>
                        <Col>
                            <h6>Aug 2021-Aug 2022</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>Full cycle recruitment in high-level accounting and finance for Chicago’s top firms and companies</li>
                                <li>Utilized varied sourcing and research strategies to attract and connect with talent </li>
                                <li>Candidate selection and due diligence for specific company standards </li>
                                <li>Relationship building with candidates, clients, internal teams, and business partners</li>
                                <li>Adhered and completed targeted company metrics and requirements </li>
                                <ul>
                                    <li>Weekly screenings, interviews, submissions</li>
                                    <ul>
                                        <li>3-5 Daily interviews</li>
                                        <li>10 Weekly submissions
                                        </li>
                                    </ul>
                                    <li>Monthly filled positions</li>
                                    <ul>
                                        <li>2-4 Monthly fills
                                        </li>
                                    </ul>
                                    <li>Quarterly targeted earnings</li>
                                    <ul>
                                        <li>$100K+ Monthly revenue through signed candidates

                                        </li>
                                    </ul>
                                </ul>


                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Branch Manager</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>PeopleReady</h6>
                        </Col>
                        <Col>
                            <h6>Downers Grove, IL</h6>
                        </Col>
                        <Col>
                            <h6> Sept 2019-June 2021</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul>
                                <li>Increased Gross Revenue/Net Profit every month from previous year</li>
                                <ul>
                                    <li>Improved Downers Grove Branch’s standing in Chicago market</li>
                                    <ul>
                                        <li>From 2nd lowest to 3rd highest earning in first year as manager</li>
                                    </ul>
                                </ul>
                                <li>Provided hands on customer support with check-ins and site visits </li>
                                <ul>
                                    <li>1-2 Daily client/site visits</li>
                                </ul>
                                <li>Created new accounts by expanding our branch’s services</li>
                                <ul>
                                    <li>95%+  Yearly client retention</li>
                                    <li>20%+  Quarterly client increase</li>
                                </ul>
                                <li>Operated branch’s social media presence (Twitter/Facebook)</li>
                                <li>Adhered and completed targeted company metrics and requirements </li>
                                <li>Interviewed applicants and implemented onboarding process
</li>
                                <li>Negotiated contracts with new customers</li>
                                <ul>
                                    <li>Increased margin by 10-15% </li>
                                    
                                </ul>


                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h2 className="bg-light border text-center">Additional Work Experience</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <ul>
                            <li>Homestate Construction, LLC - Project Manager
</li>
                            <li>Homestate Insurance, LLC - Insurance Adjuster</li>
                            <li>Mendocino Farms - Restaurant Manager</li>
                            <li>Cicero Development - Construction Laborer</li>
                            <li>Actor- Theatre, Film, Improv</li>
                        </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h2 className="bg-light border text-center">Education</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Northwestern University - Certificate</Col>
                        <Col>Chicago, IL</Col>
                        <Col>Completed-Nov 2022</Col>
                    </Row>
                    <Row>
                        <Col>
                        <ul>
                            <li>Full Stack Web Development</li>
                        </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Cornell University - Certificate</Col>
                        <Col>Online</Col>
                        <Col>Completed-May 2019</Col>
                    </Row>
                    <Row>
                        <Col>
                        <ul>
                            <li>Project Management</li>
                        </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Illinois State University- Bachelor of Science</Col>
                        <Col>Normal, IL</Col>
                        <Col>Graduated Aug 2013</Col>
                    </Row>
                    <Row>
                        <Col>
                        <ul>
                            <li>Theater/Performing Arts</li>
                        </ul>
                        </Col>
                    </Row>
                    
                </CardBody>
            </Card>
        </Container>
    );
};

export default Resume;
