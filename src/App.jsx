import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { useTheme } from './context/ThemeContext';
import { LanguageContext } from './context/LanguageContext';
import { translations } from './assets/i18n';



function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang];

  // Optional: Styles based on theme
  const appStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
  };
  console.log(lang)
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
              <Link to="/" className="nav-link">{t.home}</Link>
              <Link to="Programs" className="nav-link">{t.courses}</Link>
              <Link to="Admin" className="nav-link">{t.admin}</Link>
            </Nav>

            <div className="d-flex align-items-center gap-3">
              <Form.Select
                value={lang}
                onChange={e => setLang(e.target.value)}
                aria-label="Select language"
                style={{ width: '130px' }}
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </Form.Select>

              <Button variant="outline-secondary" onClick={toggleTheme}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>

              <Button as={Link} to="/LogIn" variant="primary">
                {t.login}
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
