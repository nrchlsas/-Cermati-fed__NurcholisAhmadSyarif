
import image from './images/work-desk__dustin-lee.jpg'
import React, { Component } from 'react';
import logo from './images/y-logo-white.png'
import { CDBFooter, CDBBox } from 'cdbreact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Toast, ToastContainer } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import { Animated } from "react-animated-css";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disheader: true,
      distoast: true,
      distoastHeader: true,

    }
  }



  toggleShowB = () => {
    this.setState({
      distoast: false
    })
  }
  toggleShowA = () => {
    this.setState({
      distoastHeader: false
    })
  }




  render() {



    return (

      <div style={{ backgroundColor: '#e5e5e5', fontSize: '14px' }}>
        {/* position: 'fixed',zIndex:'99999' */}
        <Toast style={{ width: 'auto', }} show={this.state.distoastHeader}>
          <Container>
            <Row className="justify-content-center">
              <Col md={8}>
                <Row >
                  <Col md={10}>
                    <Toast.Body style={{ textAlign: 'left' }} >By accessing and using this website, you acknowledge that you have read and
                      understand our <a href='#'>Cookie Policy, Privacy Policy,</a> and our <a href='#'>Terms of Service.</a>
                    </Toast.Body>
                  </Col>
                  <Col md={2} >
                    <Button onClick={this.toggleShowA} variant="primary" size="sm" style={{ margin: '15px 0' }} >Got It</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>



        </Toast>


        <Carousel controls={false} indicators={false}  >

          <Carousel.Item >
            <div style={{ zIndex: '999', position: 'absolute', top: '20px', left: '20px' }} >
              <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              // style={{ zIndex: '999999', position: 'relative', backgroundColor: 'transparent' }}
              /></div>
            <img
              className="d-block w-10"
              src={image}
              alt="First slide"
              width="100%"
              height="350" />


            <Carousel.Caption controls={false}>
              <h3>Hello! I'm Nurcholis AS</h3>
              <p>Consult, Design, and Develop Websites
                Have something great in mind? Feel free to contact me.
                I'll help you to make it happen.
                Let's Make Contact.</p>
              <div class="btn-group">
                <button type="button" className="btn btn-primary-outline" style={{ color: 'white' }}>LET'S ME CONTACT</button>
              </div>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
        <Container style={{ marginTop: '30px' }} >
          <Row className="justify-content-md-center">

            <Col md="4">
              <h3 align={'center'}>How Can I Help You?</h3>
              <h6 align={'center'}>Our work then targeted, best practices outcomes social innovation synergy.
                Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                program areas scale.</h6>
            </Col>
          </Row>
        </Container>
        <Container >
          <Row style={{ marginTop: '30px' }}>
            <Col sm={12} md={6} lg={4}>
              <Card style={{ marginTop: '30px', height: 'auto', backgroundColor: '#e5e5e5' }}>
                <Card.Body>
                  <Card.Title>Consult</Card.Title>

                  <Card.Text>
                    Co-create, design thinking; strengthen infrastructure resist granular.
                    Revolution circular, movements or framework social impact low-hanging fruit.
                    Save the world compelling revolutionary progress.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card style={{ marginTop: '30px', height: 'auto', backgroundColor: '#e5e5e5' }}>
                <Card.Body>
                  <Card.Title>Design</Card.Title>
                  <Card.Text>
                    Policymaker collaborates collective impact humanitarian shared value
                    vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile
                    issue outcomes vibrant boots on the ground sustainable.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card style={{ marginTop: '30px', height: 'auto', backgroundColor: '#e5e5e5' }}>
                <Card.Body>
                  <Card.Title>Develop</Card.Title>
                  <Card.Text>
                    Revolutionary circular, movements a or impact framework social impact low-
                    hanging. Save the compelling revolutionary inspire progress. Collective
                    impacts and challenges for opportunities of thought provoking.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card style={{ marginTop: '30px', height: 'auto', backgroundColor: '#e5e5e5' }}>
                <Card.Body>
                  <Card.Title>Marketing</Card.Title>
                  <Card.Text>
                    Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                    replicable, effective altruism youth. Mobilize commitment to overcome
                    injustice resilient, uplift social transparent effective.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card style={{ marginTop: '30px', height: 'auto', backgroundColor: '#e5e5e5' }}>
                <Card.Body>
                  <Card.Title>Manage</Card.Title>
                  <Card.Text>
                    Change-makers innovation or shared unit of analysis. Overcome injustice
                    outcomes strategize vibrant boots on the ground sustainable. Optimism,
                    effective altruism invest optimism corporate social.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card style={{ marginTop: '30px', height: 'auto', backgroundColor: '#e5e5e5' }}>
                <Card.Body>
                  <Card.Title>Evolve</Card.Title>
                  <Card.Text >
                    Activate catalyze and impact contextualize humanitarian. Unit of analysis
                    overcome injustice storytelling altruism. Thought leadership mass
                    incarceration. Outcomes big data, fairness, social game-changer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col md={4} xs={16}>
              <Toast style={{ backgroundColor: '#2683bb', position: 'fixed' }} onClose={this.toggleShowB} show={this.state.distoast} animation={false} className='fadeOut' position='bottom-start' >
                <Toast.Header>
                  <strong className="me-auto"><h6>Get latest updates in web technologies</h6></strong>
                  <small className="text-muted" ></small>
                </Toast.Header>
                <strong className="me-auto"></strong>
                <small className="text-muted" ></small>
                <Toast.Body>
                  <p>I write articles related to web technologies, Such as Design trends,develompment tools, UI/UX case studies and reviews, and more, Sing up  to my newsletter to get them all</p></Toast.Body>
                <Container>
                  <InputGroup className="mb-3" size="sm">

                    <Form.Control
                    />
                    <Button style={{ backgroundColor: '#faa300' }} variant="outline-secondary" id="button-addon2">
                      Count me in
                    </Button>
                  </InputGroup>
                </Container>
              </Toast>
            </Col>
          </Row>
        </Container>
        <CDBFooter className="shadow" style={{ marginTop: '100px', backgroundColor: "#050425", color:'white' }}>

          <CDBBox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className="mx-auto py-4 flex-wrap"
            style={{ width: '80%', marginTop: '10px' }}
          >
            <CDBBox display="flex" alignItems="center">

            </CDBBox>
            <CDBBox>
              <small className="ml-2">&copy; Nurcholis, 2022. All rights reserved.</small>
            </CDBBox>
            <CDBBox display="flex">
            </CDBBox>
          </CDBBox>
        </CDBFooter>



      </div>

    );
  }
}


export default App;
