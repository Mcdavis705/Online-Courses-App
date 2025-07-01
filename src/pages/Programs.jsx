import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
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
    <ListGroupItem 
        key={course.id}
        className="d-flex justify-content-between align-items-center"
    >
        <Link to={`/courses/${course.id}`}>
            {course.titulo}
        </Link>
        {/* <Button variant="primary" 
        >
            View
        </Button> */}
    </ListGroupItem>
));

function Programs() {
    const { id } = useParams();



    return (
        <Container style={style}>
            <h1>Available Courses</h1>
            <br />
            <p>Click “View” to learn more about each course and start your learning journey today.</p>
            <ListGroup>
                {courseList}
            </ListGroup>
        </Container>
    )

}

export default Programs