import { useNavigate } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

const CustomNavbar = () => {

    const navigate = useNavigate();

    const homeHandler = () => {
        navigate('/');
    }

    return (
        <>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand onClick={() => homeHandler()} href='#'>Split Bills</Navbar.Brand>
            </Container>
        </Navbar>
        </>
    );
}

export default CustomNavbar;