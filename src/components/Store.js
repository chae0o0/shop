import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: 'user',
    initialState: 'park',

    reducers : {
        changeName(state){
            return ' john park'
            
        }

    }

    // 함수(state)에서 ()는 파라미터 넣는자린데
    // state하면 기존 state('park')를 넣은거임
    // 'john' + state 이렇게 해두댐


})


// let stock = createSlice({
//     name : 'stock',
//     initialState : [10,11,12]
// })


let cart = createSlice({
    name : 'cart',
    initialState : [
      {id : 1, name : '샐러드빵', count : 2},
      {id : 2, name : '치즈빵', count : 1}
    ]
  })

export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
        
    }
})