import { useSearchParams, Navigate } from "react-router-dom"


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
function Admin() {

    const [searchParams, setSearchParams] = useSearchParams();
    const auth = searchParams.get('auth') === 'true';

    if (!auth) {
        return <Navigate to='/LogIn' replace/>
    }

    return (
        <div style={style}>
            <h1>Welcome to Admin Page</h1>
        </div>
    )

}

export default Admin