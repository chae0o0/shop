import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name: 'user',
    initialState: 'park'

})


// let stock = createSlice({
//     name : 'stock',
//     initialState : [10,11,12]
// })


let stock = ([
    {id : 0, name: 'white and Black', count : 2},
    {id : 2, name: 'Grey Yordan', count : 1}
])

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer
        
    }
})