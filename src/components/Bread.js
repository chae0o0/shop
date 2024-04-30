import { Button,Navbar, Container, Nav, Form, Row, Col, Modal,} from "react-bootstrap";
/*
props = {
  title: "",
  content: "",
  price: "",
  img: ""
}
props = {
  bread: {} -> bread가 들어갈거야.
}
*/
function Bread(props) {
  const showButton = props.showButton;
    return (
      <>
        <Container>
          <Row>
            <Col>
              <img width="80%" src={props.bread.img} />
              <h4>{props.bread.title}</h4>
              <p>{props.bread.content}</p>
              <p>{props.bread.price}원</p>
            </Col>
          </Row>
        </Container>
      </>
    );
 }


export default Bread;