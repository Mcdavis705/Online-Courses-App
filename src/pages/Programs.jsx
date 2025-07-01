import { Container, ListGroup, ListGroupItem, Button, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import { useParams, Link } from 'react-router';
import { courses } from './Courses.jsx';





const style =
{
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
}

const courseList = courses.map(course => (
    <Card key={course.id} className="mb-3">
        <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
                <Card.Title>{course.titulo}</Card.Title>
            </div>
            <Link to={`/Programs/${course.id}`}>
                <Button variant="primary">View</Button>
            </Link>
        </Card.Body>
    </Card>
));

function Programs() {
    const { id } = useParams();



    return (
        <Container style={style}>
            <h1>Available Courses</h1>
            <br />
            <p>Select a  course and start your learning journey today.</p>
            <br />

            <div className="row d-flex justify-content-center">
                <Dropdown className="col mb-3">
                    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                        Categoria
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Front End</Dropdown.Item>
                        <Dropdown.Item>Back End</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="col mb-3">
                    <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                        Course level
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Basico</Dropdown.Item>
                        <Dropdown.Item> Avanzado</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>


            <ListGroup>
                {courseList}
            </ListGroup>
        </Container>
    )

}

export default Programs