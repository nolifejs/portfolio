import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top" expand="lg" data-aos="fade-down">
      <Container>
        <Navbar.Brand href="/">
          NoLife.<span className="text-warning">JS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="active">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="active">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="active">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="active">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
