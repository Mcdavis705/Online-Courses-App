import { Container, ListGroup, Button, Card, Dropdown } from 'react-bootstrap';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { courses } from './Courses.jsx';
import { useTheme } from '../context/ThemeContext';

function Programs() {
  const { isDarkMode } = useTheme();

  const style = {
    backgroundColor: isDarkMode ? 'black' : 'whitesmoke',
    color: isDarkMode ? 'white' : 'black',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    width: '80%',
    maxWidth: '800px',
    height: 'auto',
    margin: '150px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category');
  const level = searchParams.get('level');

  const handleCategoryChange = (selectedCategory) => {
    setSearchParams({
      category: selectedCategory,
      level: level || '',
    });
  };

  const handleLevelChange = (selectedLevel) => {
    setSearchParams({
      category: category || '',
      level: selectedLevel,
    });
  };

  const clearCategory = () => {
    setSearchParams({
      level: level || '',
    });
  };

  const clearLevel = () => {
    setSearchParams({
      category: category || '',
    });
  };

  const filterCourses = courses.filter(
    (course) =>
      (!category || course.categoria.toLowerCase() === category.toLowerCase()) &&
      (!level || course.nivel.toLowerCase() === level.toLowerCase())
  );

  return (
    <Container style={style}>
      <h1>Available Courses</h1>
      <br />
      <p>Select a course and start your learning journey today.</p>
      <br />

      <div className="row d-flex justify-content-center" style={{ width: '100%', gap: '1rem' }}>
        <Dropdown className="col">
          <Dropdown.Toggle
            variant={isDarkMode ? 'secondary' : 'outline-success'}
            id="dropdown-category"
            style={{ color: isDarkMode ? 'white' : undefined }}
          >
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Category'}
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ backgroundColor: isDarkMode ? 'dimgray' : 'white' }}>
            <Dropdown.Item onClick={clearCategory}>All Courses</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange('frontend')}>Front End</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange('backend')}>Back End</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange('devops')}>DevOps</Dropdown.Item>
            <Dropdown.Item onClick={() => handleCategoryChange('herramientas')}>Herramientas</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="col">
          <Dropdown.Toggle
            variant={isDarkMode ? 'secondary' : 'outline-success'}
            id="dropdown-level"
            style={{ color: isDarkMode ? 'white' : undefined }}
          >
            {level ? level.charAt(0).toUpperCase() + level.slice(1) : 'Course Level'}
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ backgroundColor: isDarkMode ? 'dimgray' : 'white' }}>
            <Dropdown.Item onClick={clearLevel}>All Levels</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLevelChange('basico')}>Basico</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLevelChange('intermedio')}>Intermedio</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLevelChange('avanzado')}>Avanzado</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <ListGroup style={{ width: '100%', marginTop: '1rem' }}>
        {filterCourses.map((course) => (
          <Card
            key={course.id}
            className="mb-3"
            style={{
              backgroundColor: isDarkMode ? 'dimgray' : 'white',
              color: isDarkMode ? 'white' : 'black',
              borderColor: isDarkMode ? 'gray' : undefined,
            }}
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>{course.titulo}</Card.Title>
                <Card.Text>
                  {course.categoria} - {course.nivel}
                </Card.Text>
              </div>
              <Link to={`/Programs/${course.id}`}>
                <Button variant={isDarkMode ? 'light' : 'primary'}>View</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Programs;
