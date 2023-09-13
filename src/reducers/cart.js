import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { getCart, saveCart } from "../utils/api";

const cartAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.updatedAt > b.updatedAt,
});

// thunk functions
export const fetchCart = createAsyncThunk("fetch", async (token) => {
  const res = await getCart(token);
  console.log(res.data)
  return res.data;
});

export const saveCart = createAsyncThunk(
  "save",
  async (token, cartData) => {
    const res = await saveCart(token, cartData);
    console.log(res.data)
    return res.data;
  }
);

// slice
const cartSlice = createSlice({
  name: "cart",
  initialState: cartAdapter.getInitialState({
    status: "idle",
  }),
  reducers: {
    update: cartAdapter.upsertOne,
    remove: cartAdapter.removeOne,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCart.pending, (state, action) => {state.status = "loading"})
      .addCase(fetchCart.fulfilled, (state, action)=> {
        cartAdapter.setAll(state, action.payload)
      })
      .addCase(saveCart.pending, (state, action) => {state.status = "loading"})
      // .addCase(saveCart.fulfilled, (state, action)=> {
      //   cartAdapter.setAll(state, action.payload)
      // })
  }
});

// selectors
export const {
  selectIds: selectIds,
  selectAll: selectItems,
  selectById: selectItemById,
  selectTotal: selectQuantity,
} = cartAdapter.getSelectors((state) => state.cart);

export const { update, remove } = cartSlice.actions;
export default cartSlice.reducer;
