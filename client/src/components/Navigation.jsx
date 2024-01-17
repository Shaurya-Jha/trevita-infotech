import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-[--main]">
      <Container>
        {/* logo or the brand */}
        <Navbar.Brand>
          <Link to="/" className="text-white no-underline">
            Trevita
          </Link>
        </Navbar.Brand>

        {/* toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* collapsible that targets toggle btn */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/" className="text-white no-underline">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="text-white no-underline">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/services" className="text-white no-underline">
                Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="text-white no-underline">
                Contact
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/portfolio" className="text-white no-underline">
                Portfolio
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
