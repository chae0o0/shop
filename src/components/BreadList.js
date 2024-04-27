import { Button,Navbar, Container, Nav, Form, Row, Col, Modal,} from "react-bootstrap";
import Bread from "./Bread";
/*
props ={
  breads= [] // bread[]
}
 */
function BreadList(props) {
    // i = 0 / breads[i] == bread
    return (
      <>
      <Container>
      <Row>
       {props.breads.map(function (bread, i) {
          return (
            <Col key={i}>
            <Bread bread={bread} />
            </Col>
          );
        })}
        </Row>
        </Container>
      </>
    );
  }


  export default BreadList;