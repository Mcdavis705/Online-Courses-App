import {Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";function NotFound() {


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
    return (
        <div style={style}>
            <h1>404: Page Not Found!</h1>
            <p>The page you are looking for does not exist. </p>
            <Link to="/"><Button>Go back to HomePage</Button></Link>
        </div>
    )

}

export default NotFound