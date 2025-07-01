import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
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
    flexDirection: 'column'
}



function Programs() {
    const { id } = useParams();
    const course = courses.find(course => course.id === parseInt(id));
    if (!course) {
        return <div>Course not found</div>
    }

    return (
        <Container style={style}>
            <div>Course Details: 
                <h2>{course.titulo}</h2>
                <p>{course.descripcion}</p>
                <p>Category: {course.categoria}</p>
                <p>Level: {course.nivel}</p>
            </div>
        </Container>
    )

}

export default Programs