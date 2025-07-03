import { Container, ListGroup, Button, Card, Dropdown } from 'react-bootstrap';
import { useParams, Link, useSearchParams } from 'react-router-dom'; // make sure it's from 'react-router-dom'
import { courses } from './Courses.jsx';

const style = {
    backgroundColor: '#f8f9fa',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    width: '80%',
    maxWidth: '800px',
    height: 'auto',
    margin: '50px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none'
};

function Programs() {
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get('category');
    const level = searchParams.get('level');

    const handleCategoryChange = (selectedCategory) => {
        setSearchParams({
            category: selectedCategory,
            level: level || ''
        });
    };

    const handleLevelChange = (selectedLevel) => {
        setSearchParams({
            category: category || '',
            level: selectedLevel
        });
    };

    const filterCourses = courses.filter(course =>
        (!category || course.categoria.toLowerCase() === category.toLowerCase()) &&
        (!level || course.nivel.toLowerCase() === level.toLowerCase())
    );

    return (
        <Container style={style}>
            <h1>Available Courses</h1>
            <br />
            <p>Select a course and start your learning journey today.</p>
            <br />

            <div className="row d-flex justify-content-center">
                <Dropdown className="col mb-3">
                    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                        Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSearchParams({})}>All Courses</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCategoryChange('frontend')}>Front End</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCategoryChange('backend')}>Back End</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCategoryChange('devops')}>DevOps</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleCategoryChange('herramientas')}>Herramientos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="col mb-3">
                    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                        Course Level
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSearchParams()}>All Levels</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleLevelChange('basico')}>Basico</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleLevelChange('intermedio')}>Intermedio</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleLevelChange('avanzado')}>Avanzado</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <ListGroup>
                {filterCourses.map(course => (
                    <Card key={course.id} className="mb-3">
                        <Card.Body className="d-flex justify-content-between align-items-center">
                            <div>
                                <Card.Title>{course.titulo}</Card.Title>
                                <Card.Text>{course.categoria}-{course.nivel}</Card.Text>
                            </div>
                            <Link to={`/Programs/${course.id}`}>
                                <Button variant="primary">View</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </ListGroup>
        </Container>
    );
}

export default Programs;
