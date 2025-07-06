import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';

function Login() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const style = {
    backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
    color: isDarkMode ? 'white' : 'black',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: isDarkMode
      ? '0px 4px 10px rgba(255, 255, 255, 0.1)'
      : '0px 4px 10px rgba(0, 0, 0, 0.25)',
    width: '80%',
    maxWidth: '800px',
    margin: '50px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
  };

  const handleLogin = () => {
    navigate('/admin?auth=true');
  };

  return (
    <Container style={style}>
      <h1>Login</h1>
      <Form.Label></Form.Label>
      <Form.Control
        type="text"
        placeholder="Username"
        style={{
          backgroundColor: isDarkMode ? '#333' : 'white',
          color: isDarkMode ? 'white' : 'black',
          borderColor: isDarkMode ? '#555' : '#ced4da',
        }}
      />

      <Form.Label htmlFor="inputPassword5"></Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="Password"
        style={{
          backgroundColor: isDarkMode ? '#333' : 'white',
          color: isDarkMode ? 'white' : 'black',
          borderColor: isDarkMode ? '#555' : '#ced4da',
        }}
      />
      <Form.Text id="passwordHelpBlock" muted></Form.Text>
      <br />
      <Button variant={isDarkMode ? 'light' : 'primary'} onClick={handleLogin}>
        Log In
      </Button>
    </Container>
  );
}

export default Login;
