import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import projImg1 from "../../assets/img/FastCargo.jpeg";
import projImg2 from "../../assets/img/Faiz.jpeg";
import projImg3 from "../../assets/img/AzanCargo.jpg"
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css';

export const Projects = () => {

   const projects = [
    {
      title: "New Fast Cargo Lahore",
      description: "0300-7652474",
      imgUrl: projImg1,
    },
    {
      title: "Faiz-e-Daata",
      description:"0307-3830661",
      imgUrl: projImg2,
    },
    {
      title: "Azan Cargo Faislabad",
      description: "041-2656582",
      imgUrl: projImg3,
    },
    // {
    //   title: "Tic-Tac-Toe Game",
    //   description: "Use React",
    //   imgUrl: projImg4,
    // },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Transportation</h2>
                <p>We Provide Goods Services across the country and Collaborate with Fast Cargo Lahore, Faiz-e-Daata Gujranwala, Azan Cargo Faislabad, The Pak Goods Rawalpindi, Haq Bahu Goods Gujranwala.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                     
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                     

                         
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="gh"></img>
    </section>
  )
}