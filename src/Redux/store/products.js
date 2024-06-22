import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsFromServer = createAsyncThunk(
  "Products/getProductsFromServer",
  async () => {
    return axios.get("http://localhost:3000/products").then((res) => res.data);
  }
);
export const removeProductFromServer = createAsyncThunk(
  "Products/removeProductFromServer",
  async (productId) => {
    await axios
      .delete(`http://localhost:3000/products/${productId}`)
      .then((res) => res.data);
    return productId;
  }
);
export const addProductToServer = createAsyncThunk(
  "Products/addProductToServer",
  async (peoduct) => {
    return axios
      .post(`http://localhost:3000/products`, peoduct)
      .then((res) => res.data);
  }
);

const productsSlice = createSlice({
  name: "Products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsFromServer.fulfilled, (state, action) => {
      state.push([...action.payload]);
    });
    builder.addCase(removeProductFromServer.fulfilled, (state, action) => {
      let newProducts = [...state[0]].filter(
        (product) => product.id !== action.payload
      );
      state[0] = newProducts;
    });
    builder.addCase(addProductToServer.fulfilled, (state, action) => {
      state[0].push(action.payload);
    });
  },
});

// export const {} = productsSlice.actions;
export default productsSlice.reducer;
