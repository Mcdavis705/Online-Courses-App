import { react } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";



function App() {

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ borderBottom: '1px solid black' }}>
        <Container >
          <Navbar.Brand>
            <Link to="/">
              <img
                alt="Logo"
                src="/images/logo1.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Link>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="Programs" className="nav-link">Programs</Link>
              <Link to="Admin" className="nav-link">Admin</Link>
            </Nav>
            <Button><Link to="LogIn" className="nav-link">Log In</Link></Button>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      <Container>
        <Outlet />
      </Container>
      <br />
    </>
  )
}

export default App
