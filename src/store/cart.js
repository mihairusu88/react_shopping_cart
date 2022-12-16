import { createSlice } from '@reduxjs/toolkit';

export const cartStore = createSlice({
  name: 'cartStore',
  initialState: {
    cart: {
      items: [],
    },
  },
  reducers: {
    addProductToCart: (state, action) => {
      const { payload } = action;
      const itemInCart = state.cart.items.find((item) => item.id === payload.id);

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.items = [...state.cart.items, { ...payload, quantity: 1 }];
      }
    },
    incrementProductQuantity: (state, action) => {
      const { payload } = action;
      const item = state.cart.items.find((item) => item.id === payload);

      item.quantity++;
    },
    setProductQuantity: (state, action) => {
      const { payload } = action;
      const item = state.cart.items.find((item) => item.id === payload.id);

      item.quantity = payload.quantity;
    },
    decrementProductQuantity: (state, action) => {
      const { payload } = action;
      const item = state.cart.items.find((item) => item.id === payload);

      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeProduct: (state, action) => {
      const { payload } = action;
      const filteredItems = state.cart.items.filter((item) => item.id !== payload);

      state.cart.items = filteredItems;
    },
  },
});

export const {
  addProductToCart,
  setProductQuantity,
  incrementProductQuantity,
  decrementProductQuantity,
  removeProduct,
} = cartStore.actions;

export default cartStore.reducer;
