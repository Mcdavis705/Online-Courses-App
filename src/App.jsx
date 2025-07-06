import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { useTheme } from './context/ThemeContext'; 

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  // Optional: Styles based on theme
  const appStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
  };

  return (
    <div style={appStyle}>
      <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} expand="lg" style={{ borderBottom: '1px solid black' }}>
        <Container>
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
            <Nav className="me-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="Programs" className="nav-link">Programs</Link>
              <Link to="Admin" className="nav-link">Admin</Link>
            </Nav>

            <div className="d-flex align-items-center gap-2">
              <Button variant="outline-primary" onClick={toggleTheme}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
              <Button>
                <Link to="LogIn" className="nav-link">Log In</Link>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Outlet />
      </Container>
      <br />
    </div>
  );
}

export default App;
