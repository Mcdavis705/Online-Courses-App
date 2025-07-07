import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../assets/i18n';


import { Outlet, Link } from "react-router-dom"; function NotFound() {
    const { lang, setLang } = useContext(LanguageContext);
    const t = translations[lang];

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
            <h1>{t.notFound}</h1>
            <p>{t.notFoundMessage}</p>
            <Link to="/">
                <Button>
                    {t.notFoundButton}
                </Button>
            </Link>
        </div>
    )

}

export default NotFound