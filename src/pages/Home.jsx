import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    const style =
    {
        backgroundColor: '#f8f9fa',
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
        flexDirection: 'column'
    }

    return (
        <Container style={style}>
            <h1>Explore Online Courses</h1>
            <br />
            <p>Welcome to our online course platform! Select a course to start your learning journey.</p>
            <Link to='Programs'>
                <Button>Select a course</Button>
            </Link>
        </Container>
    )

}

export default Home