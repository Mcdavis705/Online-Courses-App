import { useSearchParams, Navigate } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';

function Admin() {
  const { isDarkMode } = useTheme();
  const [searchParams] = useSearchParams();
  const auth = searchParams.get('auth') === 'true';

  if (!auth) {
    return <Navigate to='/LogIn' replace />;
  }

  const style = {
    backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
    color: isDarkMode ? 'white' : 'black',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: isDarkMode
      ? '0px 4px 10px rgba(255, 255, 255, 0.1)'
      : '0px 4px 10px rgba(0, 0, 0, 0.25)',
    width: '80%',
    maxWidth: '800px',
    margin: '50px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textDecoration: 'none',
  };

  return (
    <div style={style}>
      <h1>Welcome to Admin Page</h1>
    </div>
  );
}

export default Admin;
