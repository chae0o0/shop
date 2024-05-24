import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: 'user',
    initialState: 'park',

    reducers : {
        changeName(state){
            return ' john park'
            
        }

    }
    // * state 수정해주는 함수 만들기 *
    // 함수(state)에서 ()는 파라미터 넣는자린데
    // 기존 state가 필요한경우 함수('기존함수명')를 넣은거임
    // 'john' + state 이렇게 해두댐
    // 더 필요하면 , 찍고 함수 더 만들면됨

})

// 위에 만든 함수 export 하기 
export let { changeName } =user.actions





// let stock = createSlice({
//     name : 'stock',
//     initialState : [10,11,12]
// })


let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 1, name : '샐러드빵', count : 2},
      {id : 2, name : '치즈빵', count : 1}

    ],

    reducers:{
        addCount(state, action){
          let No =   state.findIndex((a)=>{ return a.id === action.payload })
           state[No].count++
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
  })

  export let {addCount} = cart.actions
  export let {addItem} = cart.actions

export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
        
    }
})
