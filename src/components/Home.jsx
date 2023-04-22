import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="landing" className="bg-dark text-light">
        <Container>
          <Row className="justify-content-evenly">
            <Col md="6" className="landing-content">
              <h1>NoLifeJS</h1>
              <p>
                <i className="fa fa-envelope me-2"></i> nolifejs1@gmail.com
              </p>
              <Button variant="light" onClick={() => navigate("/main")}>
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
