import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Navbar,Container, Nav,Form,Row,Col } from 'react-bootstrap';
import mainImg from './img/bread3.jpg';
import img01 from './img/bread01.png';
import img02 from './img/bread02.png';
import img03 from './img/bread03.png';
import { useState } from 'react';
import data from './data.js'




function App() {

  
let [breads] = useState(data);


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
          <Nav className=''>
            <Nav.Link href="member">💃</Nav.Link>
            {/* <Nav.Link href="member">회원</Nav.Link>
            <Nav.Link href="login">로그인</Nav.Link> */}
          </Nav>
          &nbsp;

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='search' variant="search">search</Button>
          </Form>
        </Container>
      </Navbar>



      <div className='main-bg' style={{backgroundImage: 'url( ' + mainImg +' )' }}></div>

      <Container >
      <Row>
        <Col>
        <img src={img01} width="80%"/>
        <h4>{breads[0].title}</h4>
        <p>{breads[0].content}</p>
        <p>{breads[0].price}</p>    
        </Col>

        <Col>
        <img src={img02} width="80%"/>
        <h4>{breads[1].title}</h4>
        <p>{breads[1].content}</p>
        <p>{breads[1].price}</p> 
        </Col>

        <Col>
        <img src={img03} width="80%"/>
        <h4>{breads[2].title}</h4>
        <p>{breads[2].content}</p>
        <p>{breads[2].price}</p> 
        </Col>
      
      </Row>
    </Container>
    </>
  );
}

export default App;
