import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; 

function Home() {
  const { isDarkMode } = useTheme(); 

  const style = {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#f8f9fa',
    color: isDarkMode ? '#ffffff' : '#000000',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    width: '80%',
    maxWidth: '800px',
    height: 'auto',
    margin: '150px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <Container style={style}>
      <h1>Explore Online Courses</h1>
      <br />
      <p>Welcome to our online course platform! Select a course to start your learning journey.</p>
      <Link to="Programs">
        <Button variant={isDarkMode ? 'light' : 'primary'}>Select a course</Button>
      </Link>
    </Container>
  );
}

export default Home;
