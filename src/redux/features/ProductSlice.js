import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchedData = createAsyncThunk(
  "fetchingProducts",
  async () => {
    const resp = await fetch("/product.json");
    const data = await resp.json();
    return data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", 
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
        state.items = action.payload; 
      })
      .addCase(fetchedData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;