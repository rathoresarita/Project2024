import { createSlice } from '@reduxjs/toolkit'

const initialState={

    products:[],
    productsNumber:0

}
export const cartSlice=createSlice({

    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           // state.productsNumber=state.productsNumber+1
           const addProductExists=state.products.find((product)=>product.id===action.payload.id)
if(addProductExists){
    console.logparseInt(action.payload.quantity)
    addProductExists.quantity += parseInt(action.payload.quantity)
    console.log('sssssss',addProductExists)
    console.log(addProductExists.quantity)

} else{

    state.products.push({...action.payload,quantity:parseInt(action.payload.quantity)})
}

state.productsNumber=state.productsNumber+parseInt(action.payload.quantity)
        },
        removeFromCart:(state,action)=>{


        }
    }


})
export const {addToCart,removeFromCart}=cartSlice.actions
export default  cartSlice.reducer