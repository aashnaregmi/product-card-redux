import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const CartSlice = createSlice({
  name:"cart",
  initialState:{
    value:0,
  },
  reducers:{
    increment:(state)=>{
      state.value+=1
    },
  decrement: (state) => {
  if (state.value > 0) state.value -= 1;
}

  }
})

export const {increment,decrement}=CartSlice.actions;
export default CartSlice.reducer;
