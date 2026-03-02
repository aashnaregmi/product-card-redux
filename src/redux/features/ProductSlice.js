import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchedData=createAsyncThunk(
  "fetchingProducts",
  async()=>{
 const resp =await fetch("../../../public/product.json");
    const response =await resp.json();
    return response.products;
  }

   


  
)

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchedData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchedData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload; // store fetched products
      })
      .addCase(fetchedData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;