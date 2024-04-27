import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button,Navbar, Container, Nav, Form, Row, Col, Modal,} from "react-bootstrap";
import mainImg from "./img/bread3.jpg";
import img01 from "./img/bread01.png";
import img02 from "./img/bread02.png";
import img03 from "./img/bread03.png";
import { useState } from "react";
import data from "./data.js"; // -> original 데이터
import Bread from "./components/Bread.js";
import BreadList from "./components/BreadList.js";

function App() {
  let [breads] = useState(data);

  return (
    <>
      <Navbar data-bs-theme="dark" className="Main">
        <Container>
          <Navbar.Brand href="#home" className="Nav_Main">
            빵순이빵
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">빵목록</Nav.Link>
            <Nav.Link href="#features">마싯다</Nav.Link>
            <Nav.Link href="#pricing">옴늄늄</Nav.Link>
          </Nav>
          <Nav className="">
            <Nav.Link href="member">💃</Nav.Link>
            {/* <Nav.Link href="member">회원</Nav.Link>
            <Nav.Link href="login">로그인</Nav.Link> */}
          </Nav>
          &nbsp;
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="무슨 빵 먹게? 한입만"
              className="me-2 search_in"
              aria-label="Search"
            />
            <Button className="search" variant="search">
              🍞
            </Button>
          </Form>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url( " + mainImg + " )" }}
      ></div>


      {/* 컴포넌트 없이 Map 돌린 것 
      {breads.map(function (bread, i) {
        // i = 0 / breads[i] == bread
        return (
          <>
            <Container>
              <Row>
                <Col>
                  <img width="20%" src={bread.img} />
                  <h4>{bread.title}</h4>
                  <p>{bread.content}</p>
                  <p>{bread.price}</p>
                </Col>
              </Row>
            </Container>
          </>
        );
      })}
      */}

      {/* 자식컴포넌트를 Map 돌린것 
      {breads.map(function (bread, i) {
        // i = 0 / breads[i] == bread
        return (
          <Bread bread={bread}/>
        );
      })}
      */}

      {/* Map 까지 자식컴포너트로 분리한 것 */}
      <BreadList breads={breads} />
    </>
  );
}

// // 이거 왜 만들었지 -> 모달이 아니라 반복되는 영역을 자식컴포넌트로 분리
// 여러번...



export default App;
