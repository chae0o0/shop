import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container, Nav, Form, Row, Col, Modal } from "react-bootstrap";
import mainImg from "./img/bread3.jpg";
import { createContext, useEffect, useState } from "react";
import data from "./data.js"; // -> original 데이터
import BreadList from "./components/BreadList.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./components/Detail.js";
import About from "./components/About.js";
import Event from "./components/Event.js";
import axios from "axios";
import Cart from "./components/Cart.js";


export let Context1 = createContext();

function App() {
  let obj = {name: 'park'}
  localStorage.setItem('data',JSON.stringify(obj))
  let 꺼낸거 = localStorage.getItem('data')
  console.log(JSON.parse(꺼낸거).name);

  let [breads, setBreads] = useState(data);
  let [stock] = useState([10,11,12]);


  let navigate = useNavigate();

  useEffect(()=>{
    console.log('appjs')
    localStorage.setItem('watchedBread', JSON.stringify( [] ))
  },[]) 




  return (
    <>
      <Navbar data-bs-theme="dark" className="Main">
        <Container>
          <Navbar.Brand  onClick={() => {
                navigate("/");
              }} className="Nav_Main cursor-pointer">
            빵순이빵
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              장바구니
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              뒤로가기
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
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

              <Button
                variant="outline-warning"
                onClick={() => {
                  let copy = [...breads];
                  copy.sort((a, b) => a.price.localeCompare(b.price));
                  setBreads(copy);
                }}
              >
                낮은 가격순 정렬
              </Button>
            </>
          }
        />

        {/* Nested Routes라는것 /about/memeber 이렇게 들어가라는거 
            About도 보여주고 memeber도 보여줌
            근데 안에 어디에 보여줄지 정해야해서 Outlet으로 정해야함
            유사페이지만들때 주로 사용함 */}
        <Route path="/about" element={<About />}>
          <Route path="/about/memeber" element={<div>멤버임</div>} />
          <Route path="/about/location" element={<div>위치정보임</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route
            path="/event/one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          />
          <Route path="/event/two" element={<div> 생일 기념 쿠폰받기</div>} />
        </Route>

        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock }}>
              <Detail breads={breads} />
            </Context1.Provider>
          }
        />

        <Route path="/*" element={<div>없는 페이지입니다</div>} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* 
        <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((data01)=>{
            console.log(data01.data)
        })
        .catch(()=>{
          console.log('실패함 ㅅㄱ')
        })

      }}>버튼</button> */}
    </>
  );
}

// // 이거 왜 만들었지 -> 모달이 아니라 반복되는 영역을 자식컴포넌트로 분리
// 여러번...

export default App;
