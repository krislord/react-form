import { Navbar, Nav, Container } from "react-bootstrap";
const Navigation = ({ brand, login, register, logout }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">{brand}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/register">{register}</Nav.Link>
            <Nav.Link href="/login">{login}</Nav.Link>
            <Nav.Link href="/logout">{logout}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
