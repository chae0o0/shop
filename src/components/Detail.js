import { useParams } from 'react-router-dom';
import img05 from '../img/bread05.jpg';
import styled from 'styled-components';


let Btn = styled.button`
  background : ${ props => props.bg};
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding: 10px;
  `
// let NewBtn = styled.button(Btn)`
//   기존버튼 복제하는 방법
// `


function Detail(props) {

  let {id} = useParams();
  let findBreads = props.breads.find(function(breads){
    return breads.id == id
  })

    return (
      <div className="container">
        <Btn bg="pink">버튼</Btn>
        
        <div className="row">
          <div className="col-md-6">
            <img src={findBreads.img} width="80%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{findBreads.title}</h4>
            <p>{findBreads.content}</p>
            <p>{findBreads.price} 원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    );
}

export default Detail;