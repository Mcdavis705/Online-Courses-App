import { useNavigate, Navigate, useSearchParams } from "react-router-dom"
import { Container, Form, Button } from 'react-bootstrap';


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
function Login() {

    const navigate = useNavigate();


    const handleLogin = () => {
        navigate('/admin?auth=true');
    }

    return (
        <Container style={style}>
            <h1>Login</h1>
            <Form.Label></Form.Label>
            <Form.Control type="name" placeholder="Username" />

            <Form.Label htmlFor="inputPassword5"></Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="Password"
            />
            <Form.Text id="passwordHelpBlock" muted></Form.Text>
            <br />
            <Button variant="primary" onClick={handleLogin}>Log In</Button>

        </Container>
    )

}

export default Login