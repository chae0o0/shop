import { useParams } from 'react-router-dom';
import img05 from '../img/bread05.jpg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';






let Btn = styled.button`
  background : ${ props => props.bg};
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding: 10px;
  `

let Circle = styled.button`
  width: 4rem;
  height: 4rem;
  background: #F5D0A9;
  border-radius: 50%;
  color : #FBFBEF;
  border: 2px solid #DF7401;
  font-weight : bold;
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



  let [count, setCount] = useState(0)
  let {id} = useParams();
  let findBreads = props.breads.find(function(breads){
    return breads.id == id
  })
  let [alert, setAlert] = useState(true);



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
  
  useEffect(()=>{
   let a = setTimeout( ()=> {setAlert(false)},2000)

    return ()=>{
      clearTimeout(a); //타이머 제거 함수 mount시 실행안됨, numonut시 실행
    }
  },[count])




    return (
      <div className="container">
        {count}
        <button onClick={()=>{setCount(count +1) }}>버튼</button>
        
        {
          alert == true
          ? <div className='alert alert-warning'>
            2초 이내 구매시 할인
            </div>
            : null
        }



        <Btn bg="pink">버튼</Btn>
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
      
      <div>
        <input type='text' placeholder="숫자만 입력하쇼"/>
      </div>
      
      </div>


    );
}

export default Detail;