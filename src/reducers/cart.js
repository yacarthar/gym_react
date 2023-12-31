import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { getCart } from "../utils/api";

const cartAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.updatedAt > b.updatedAt,
});

// thunk functions
export const fetchCart = createAsyncThunk("fetch", async (token) => {
  const res = await getCart(token);
  console.log(res.data)
  return res.data;
});

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
  }
});

// selectors
export const {
  selectIds, // ids put to param to get productInfo | Cart
  selectAll, // list all product put to body to update cart | ProductDetail
  selectById, // product | CartItem
  selectTotal, // number in card | navbar
  selectEntities // cart items map | Cart
} = cartAdapter.getSelectors((state) => state.cart);

export const { update, remove } = cartSlice.actions;
export default cartSlice.reducer;
