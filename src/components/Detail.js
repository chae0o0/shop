import { useParams } from "react-router-dom";
import img05 from "../img/bread05.jpg";
import styled from "styled-components";
import { useEffect, useState,useContext } from "react";
import {Nav} from 'react-bootstrap';
import data from "../data";
import {Context1} from "../App.js";



let Btn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let Circle = styled.button`
  width: 4rem;
  height: 4rem;
  background: #f5d0a9;
  border-radius: 50%;
  color: #fbfbef;
  border: 2px solid #df7401;
  font-weight: bold;
`;

// let NewBtn = styled.button(Btn)`
//   기존버튼 복제하는 방법
// `

// 옛날 방식
// class Detail2 extends React.Component {
//     componentDidMount(){

//     }
//     componentDidUpdate(){

//     }
//     componentWillUnmount(){

//     }
// }

function Detail(props) {

  let {stock} = useContext(Context1)
  
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let findBreads = props.breads.find(function (breads) {
    return breads.id == id;
  });
  let [sale, setSale] = useState(true);
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{ setFade2('end')},600)
    return ()=>{
      setFade2('')
    }
  },[])

  /*useEffect 사용법
  1. useEffect(()=>{  })     재 렌더링마다 코드실행하고  싶으면
  2. useEffect(()=>{  },[])  mount시   1회 코드실행하고 싶으면
  3. useEffect(()=>{         unmount시 1회 코드실행하고 싶으면
          return()=>{
          }
        },[] ) 
  4.useEffect 실행 전에 뭔가 실행하려면 언제나 return()=>{}
                            
  5.[state명] 특정 state 변경시에만 실행하려면
  */

  useEffect(() => {
    let a = setTimeout(() => {
      setSale(false);
    }, 2000);

    return () => {
      clearTimeout(a); //타이머 제거 함수 mount시 실행안됨, numonut시 실행
    };
  }, [count]);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자만 입력하라해찌");
    }
  }, [num]);

  return (
    <div className={"container start" + fade2}>
      {sale == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={findBreads.img} width="80%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findBreads.title}</h4>
          <p>{findBreads.content}</p>
          <p>{findBreads.price} 원</p>
          <Circle>결!제</Circle>

        </div>
      </div>

      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
        placeholder="숫자만 입력하쇼"
      />
      <button>검색</button>

      <Nav justify variant="tabs" defaultActiveKey="/home1">
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(0)}} eventKey="/home1">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(1)}} eventKey="link-1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(2)}} eventKey="link-2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} breads={props.breads}/>

    </div>
    
  );
}

// props 쓰기 싫을때 {state1이름 , state2이름 ...} 이렇게 작성하면
// 밑에서 props.state1이름 이렇게 쓸 필요가 없음

function TabContent({tab, breads}){
  // let [breads, setBreads] = useState(data); 이거 쓰지말라고 ~~~
  let [fade, setFade] = useState('')
  let {stock} = useContext(Context1)

  useEffect(()=>{
    let a = setTimeout(()=>{ setFade('end')},300)

    return ()=>{
      clearTimeout(a)
      setFade('')
    }
  },[tab])

  return (
    <div className={'start' + fade}>
      {[<div>{breads[0].title} </div>, <div>{breads[1].title}</div>, <div>{breads[2].title}</div>][tab]}
      </div>
  );
}


// if문으로 하면 이렇게 
// function TabContent({tab}){
//   if (tab == 0) {
//     return <div>내용0</div>
//   } 
//   else if (tab == 1) {
//     return <div>내용1</div>
//   } 
//   else if (tab == 2) {
//     return <div>내용2</div>
//   }
// }



export default Detail;
