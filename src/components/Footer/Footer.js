import { Container, Row, Col } from "react-bootstrap";
// import navsIcon1 from "../../assets/img/nav-icon1.png"
// import navsIcon2 from "../../assets/img/nav-icon2.svg";
// import navsIcon3 from "../../assets/img/nav-icon3.png";



import React from 'react';


export const Footer = () => {
  return (
    <footer className="text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col md="4">
           
            {/* <p>
              We are a company dedicated to providing the best service possible.
            </p> */}
          </Col>
          <Col md="4">
            <h5>Contact Us</h5>
            <p>
             The New Malik Goods Dina<br />
              Phone: +92-320-1888111<br/>
              Address: Near Asim Floor Mills GT Road Dina
            </p>
          </Col>
          <Col md="4">
           
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <p>&copy; {new Date().getFullYear()} Muhammad Awais|All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

    