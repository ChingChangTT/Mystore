import { createSlice } from "@reduxjs/toolkit";
const initialState={
    CardItems:[],
    totalItem:0,
    quantity:0
}
export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
       addTocart:(state,action)=>{
         state.totalItem+=1
       }
    }
})
export const SelectItems=((state))
export const {addTocart}=createSlice.actions;
export default cartSlice.reducer