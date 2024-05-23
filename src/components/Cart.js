import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';


function Cart(){

    let user = useSelector((state)=>{ return state.user })

    // return state.user  만 하면 user  내용만 나옴
    // return state.stock 만 하면 stock 내용만 나옴

    let state = useSelector((state)=>{ return state})
    console.log(state.cart[0].name)

    return (
      <>
        <div>
          <Table>
            <thead>
            
              <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
              </tr>
       

            {
                state.cart.map((a,i)=>{
                  return (
                    <tr>
                      <td>{state.cart[i].id}</td>
                      <td>{state.cart[i].name}</td>
                      <td>{state.cart[i].count}</td>
                      <td>안녕</td>
                    </tr>
                  );
                })
              }
           
           </thead>
          </Table>
        </div>
      </>
    );
}



export default Cart;