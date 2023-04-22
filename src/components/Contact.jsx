import { Button, Form, FloatingLabel, Container, Col, Row } from "react-bootstrap";

const BasicExample = () => {
  return (
    <section id="contact" data-aos="fade-down">
      <Form>
        <Container>
          <Row>
            <Col>
              <h2>
                <strong>Contact</strong>
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col md="6">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <FloatingLabel controlId="message" label="Message" className="text-dark">
                  <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: "100px" }} />
                </FloatingLabel>
              </Form.Group>

              <Button variant="light" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </section>
  );
};

export default BasicExample;
