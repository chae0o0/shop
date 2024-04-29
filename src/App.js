import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button,Navbar, Container, Nav, Form, Row, Col, Modal,} from "react-bootstrap";
import mainImg from "./img/bread3.jpg";
import { useState } from "react";
import data from "./data.js"; // -> original 데이터
import BreadList from "./components/BreadList.js";
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from "./components/Detail.js";


function App() {
  let [breads] = useState(data);
  let navigate = useNavigate();
  

  return (
    <>
      <Navbar data-bs-theme="dark" className="Main">
        <Container>
          <Navbar.Brand href="#home" className="Nav_Main">
            빵순이빵
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>

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

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url( " + mainImg + " )" }}
              ></div>
              {/* Map 까지 자식컴포너트로 분리한 것 */}
              <BreadList breads={breads} />
            </>
          }
        />

         <Route
          path="/detail"
          element={
            <Detail/>
          }
        /> 
      </Routes>
    </>
  );
}

// // 이거 왜 만들었지 -> 모달이 아니라 반복되는 영역을 자식컴포넌트로 분리
// 여러번...



export default App;
