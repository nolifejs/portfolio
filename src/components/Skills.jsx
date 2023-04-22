import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <section id="skills" data-aos="fade-right">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>
              <strong>Skills</strong>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <h5>Languages</h5>
          <Col md="4" className="mt-3">
            <p className="bg-danger rounded p-2">HTML CSS</p>
          </Col>
          <Col md="4" className="mt-3">
            <p className="bg-warning rounded p-2">JS</p>
          </Col>
          <Col md="4" className="mt-3">
            <p className="bg-secondary rounded p-2">PHP</p>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-center mt-5">
          <h5>FrontEnd</h5>
          <Col md="4" className="mt-3">
            <p className="bg-primary rounded p-2">ReactJS</p>
          </Col>
          <Col md="4" className="mt-3">
            <p className="bg-info rounded p-2">TailwindCSS</p>
          </Col>
          <Col md="4" className="mt-3">
            <p className="bg-secondary rounded p-2">Bootstrap</p>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-center mt-5">
          <h5>BackEnd</h5>
          <Col md="4" className="mt-3">
            <p className="bg-success rounded p-2">NodeJS</p>
          </Col>
          <Col md="4" className="mt-3">
            <p className="bg-light text-dark rounded p-2">ExpressJS</p>
          </Col>
          <Col md="4" className="mt-3">
            <p className="bg-secondary rounded p-2">PHP</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
