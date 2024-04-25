import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Navbar,Container, Nav, } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar data-bs-theme="dark" className='Main'>
        <Container>
          <Navbar.Brand href="#home" className='Nav_Main'>쇼핑몰이름</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈페이지</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
