import { Button,Navbar, Container, Nav, Form, Row, Col, Modal,} from "react-bootstrap";
import Bread from "./Bread";
import axios from "axios";
// import data from "../data.js";
import {useState} from 'react';


/*
props ={
  breads= [] // bread[]
}
 */
function BreadList(props) {
    let [breads, setBreads] = useState(props.breads);
    console.log('breads:',props.breads)
    // i = 0 / breads[i] == bread
    return (
      <>
        <Container>
          <Row>
            {breads.map(function (bread, index) {
              return (
                <Col>
                  <Bread bread={bread} />
                </Col>
              );
            })}
          </Row>
        </Container>

        <button
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((list) => {
                console.log(list.data);
                let copy = [...breads, ...list.data];
                setBreads(copy);
              })
              .catch((e) => {
                console.log("실패:", e);
              });
          }}
        >
          상품 추가하기
        </button>
      </>
    );
  }


  export default BreadList;