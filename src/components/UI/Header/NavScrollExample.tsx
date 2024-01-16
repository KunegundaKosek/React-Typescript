import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand href="/" >React + Typescript</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" >Home</Nav.Link>

            <NavDropdown title="Projekty" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="/todo" >TODO App</NavDropdown.Item>
              <NavDropdown.Item href="/calculator">Kalkulator Inwestycyjny</NavDropdown.Item>
              <NavDropdown.Item href="/weather">Pogoda</NavDropdown.Item>
              <NavDropdown.Item href="/timer">Timer</NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href="#" >Kontakt</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Szukaj"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Szukaj</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
