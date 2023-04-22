import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" data-aos="fade-down">
      <Container>
        <Row className="text-center">
          <Col>
            <h2>
              <strong>About Me</strong>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md="4">
            <p>
              My name is Habib. I live in Magelang Regency, Central Java, Indonesia. Now i'm a Junior High School student and freelance website programmer. I also make contents on my
              <a href="https://www.youtube.com/@NoLifeJS" target="_blank" rel="noreferrer" className="text-light ms-1">
                YouTube Channel
              </a>
              .
            </p>
          </Col>
          <Col md="4">
            <p>
              As explained above, i'm a freelance website programmer and i can make the websites with my skills like ReactJS, ExpressJS, or HTML, CSS, with Vanilla PHP (with no framework). I use MySQL as my{" "}
              <a href="https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-what-is-database-management-system" className="text-light" target="_blank" rel="noreferrer">
                DBMS
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
